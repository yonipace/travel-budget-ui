import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";
import { useCallback, useEffect, useState } from "react";
import TripAppBar from "./TripAppBar";
import useFetch from "../../hooks/useFetch";
import AddExpense from "./AddExpense";

const TripMainView = () => {
  const trip = useSelector((state) => state.trip.trip);
  const token = useSelector((state) => state.authentication.token);
  const tripId = useSelector((state) => state.trip.trip.id);
  const [expenses, setExpenses] = useState([]);

  const { error, loading, sendRequest: getExpenseList } = useFetch();

  const handleDialogClose = () => {
    updateExpenseList();
  };

  const updateExpenseList = useCallback(() => {
    getExpenseList(
      {
        url: "http://localhost:8080/trip",
        headers: {
          token: token,
        },
        params: { tripId: tripId },
      },
      (expenseList) => {
        console.log("updating expenses...");
        setExpenses(expenseList);
      }
    );
  }, [getExpenseList, token, tripId]);

  useEffect(() => {
    updateExpenseList();
  }, [updateExpenseList, getExpenseList, token, tripId]);

  return (
    <div>
      <TripAppBar trip={trip} />
      <ExpenseList
        expenses={expenses}
        loading={loading}
        onClose={handleDialogClose}
      />
      <AddExpense onClose={handleDialogClose} />
    </div>
  );
};

export default TripMainView;
