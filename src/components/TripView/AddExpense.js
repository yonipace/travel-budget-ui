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
import { useState } from "react";

const AddExpense = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //updates the expense list after closing the form
    props.onClose();
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
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
              text={{
                button: "Add Expense",
                loading: "Adding...",
              }}
            />
          </Container>
        </DialogContent>
      </Dialog>
      <Fab
        onClick={handleOpen}
        color="primary"
        sx={{ position: "fixed", bottom: 16, right: 20 }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default AddExpense;
