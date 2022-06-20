import { Container, Fab, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpenseCard from "./ExpenseCard";

const ExpenseList = (props) => {
  return (
    <div>
      <Container sx={{ mt: 20 }}>
        {props.expenses.map((expense) => (
          <ExpenseCard data={expense} key={expense.id} />
        ))}
      </Container>
      <Tooltip title="add new trip">
        <Fab
          onClick={props.handleAddExpense}
          color="secondary"
          sx={{ position: "fixed", bottom: 16, right: 20 }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default ExpenseList;
