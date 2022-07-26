import { Container } from "@mui/material";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = (props) => {
  return (
    <div>
      <Container sx={{ mt: 24 }}>
        {props.loading
          ? "Loading..."
          : props.expenses.map((expense) => (
              <ExpenseCard
                data={expense}
                key={expense.id}
                onClose={props.onClose}
              />
            ))}
      </Container>
    </div>
  );
};

export default ExpenseList;
