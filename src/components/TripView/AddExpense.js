import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Fab,
  Typography,
} from "@mui/material";
import ExpenseForm from "./NewExpenseForm";
import AddIcon from "@mui/icons-material/Add";

const AddExpense = (props) => {
  return (
    <>
      <Dialog onClose={props.formState.closeForm}>
        <DialogContent>
          <Container maxWidth="sm">
            <Box sx={{ maxWidth: "sm" }}>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  mt: 1,
                  p: 2,
                  color: "background.paper",
                  backgroundColor: "primary.main",
                  borderRadius: "15px",
                  textAlign: "center",
                }}
              >
                <strong> Add New Expense</strong>
              </Typography>
            </Box>
            <ExpenseForm
              closeForm={props.formState.closeForm}
              text={{
                button: "Add Expense",
                loading: "Adding...",
              }}
            />
          </Container>
        </DialogContent>
      </Dialog>
      <Fab
        onClick={props.formState.openForm}
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 20 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddExpense;
