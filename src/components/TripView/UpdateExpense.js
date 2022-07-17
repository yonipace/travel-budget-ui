import { Dialog, DialogContent, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import UpdateExpenseForm from "./UpdateExpenseForm";
import { useState } from "react";

const UpdateExpense = (props) => {
  const [open, setOpen] = useState(false);

  const { openForm, closeForm } = props.formState;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeForm();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <UpdateExpenseForm
            text={{
              title: "Update Expense",
              button: "Update Expense",
              loading: "Updating...",
            }}
            expense={props.expense}
          />
        </DialogContent>
      </Dialog>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
    </>
  );
};

export default UpdateExpense;
