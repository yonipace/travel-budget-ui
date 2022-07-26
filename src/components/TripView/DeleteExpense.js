import { Alert, AlertTitle, Button, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useFetch from "../../hooks/useFetch";
import appConfig from "../../Utils/Config";
import { useSelector } from "react-redux";

const DeleteExpense = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const [open, setOpen] = useState(false);
  const { error, loading, sendRequest: deleteExpense } = useFetch();

  const handleDelete = () => {
    deleteExpense({
      url: appConfig.baseUrl + "trip",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      method: "DELETE",
      params: {
        id: props.expense.id,
      },
    });
    setOpen(false);
    props.onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
          props.onClose();
        }}
      >
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Deleting an expense is a permanent action. Are you sure you want to do
          it?
          <Button
            color="inherit"
            size="small"
            variant="outlined"
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button
            color="inherit"
            size="small"
            variant="outlined"
            sx={{ m: 1 }}
            onClick={() => {
              setOpen(false);
            }}
          >
            No
          </Button>
        </Alert>
      </Dialog>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default DeleteExpense;
