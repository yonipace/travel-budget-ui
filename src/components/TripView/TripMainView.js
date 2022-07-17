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
  const [isFormOpen, setIsFormOpen] = useState(false);

  const { error, loading, sendRequest: getExpenseList } = useFetch();

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };
  const handleFormClose = () => {
    sendRequest();
  };

  const formState = {
    isFormOpen,
    openForm: handleFormOpen,
    closeForm: handleFormClose,
    setIsOpen: setIsFormOpen,
  };

  const sendRequest = useCallback(() => {
    const updateExpenses = (expenseList) => {
      console.log("updating expenses...");
      setExpenses(expenseList);
    };
    getExpenseList(
      {
        url: "http://localhost:8080/trip",
        headers: {
          token: token,
        },
        params: { tripId: tripId },
      },
      updateExpenses
    );
  }, [getExpenseList, token, tripId]);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, getExpenseList, token, tripId]);

  return (
    <div>
      <TripAppBar trip={trip} />
      <ExpenseList
        expenses={expenses}
        loading={loading}
        formState={formState}
      />
      {/* <AddExpense formState={formState} /> */}
    </div>
  );
};

export default TripMainView;
