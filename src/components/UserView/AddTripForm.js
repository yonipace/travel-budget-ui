import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { currencies } from "../../model/currencyData";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const AddTripForm = (props) => {
  const token = useSelector((state) => state.authentication.token);

  const [currency, setCurrency] = useState("");
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { error, sendRequest: addTrip } = useFetch();

  const submitHandler = (e) => {
    e.preventDefault();
    const trip = {
      name,
      budget,
      destination,
      currency,
      startDate,
      endDate,
    };

    addTrip({
      url: "http://localhost:8080/user",
      headers: {
        "Content-Type": "application/json",
        token,
      },
      method: "POST",
      body: JSON.stringify(trip),
    });

    // setName("");
    // setBudget("");
    // setDestination("");
    // setStartDate("");
    // setEndDate("");
    // setCurrency("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: "sm", p: 3, mt: 10 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              enter trip details
            </Typography>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={props.handleCancel}
            >
              cancel
            </Button>
          </Stack>
          <Box component="form" onSubmit={submitHandler}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Trip Name"
                  variant="standard"
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Destination"
                  variant="standard"
                  fullWidth
                  onChange={(e) => {
                    setDestination(e.target.value);
                  }}
                  value={destination}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Currency"
                  variant="standard"
                  onChange={(e) => {
                    setCurrency(e.target.value);
                  }}
                  value={currency}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label} {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Budget"
                  variant="standard"
                  type="number"
                  fullWidth
                  onChange={(e) => {
                    setBudget(e.target.value);
                  }}
                  value={budget}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Start Date"
                  variant="standard"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  value={startDate}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="End Date"
                  variant="standard"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  value={endDate}
                ></TextField>
              </Grid>
            </Grid>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ mt: 3 }}
            >
              Add Trip
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default AddTripForm;
