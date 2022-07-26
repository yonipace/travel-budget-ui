import { Alert, Snackbar } from "@mui/material";

import React from "react";

const ResultAlert = (props) => {
  const { showAlert, alertMessage, alertSeverity } = props.data;

  console.log(props);

  return (
    <Snackbar
      open={showAlert}
      autoHideDuration={6000}
      onClose={props.handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        variant="filled"
        onClose={props.handleCloseAlert}
        severity={alertSeverity}
        // sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default ResultAlert;
