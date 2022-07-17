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
                formState={props.formState}
              />
            ))}
      </Container>
    </div>
  );
};

export default ExpenseList;
