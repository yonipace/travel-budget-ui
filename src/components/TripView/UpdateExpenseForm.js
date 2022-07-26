import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HotelIcon from "@mui/icons-material/Hotel";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FlightIcon from "@mui/icons-material/Flight";
import TollIcon from "@mui/icons-material/Toll";
import { currencies } from "../../model/currencyData";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const UpdateExpenseForm = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const tripId = useSelector((state) => state.trip.trip.id);
  const { error, loading, sendRequest: sendExpense } = useFetch();
  const [title, setTitle] = useState(props.expense.title);
  const [note, setNote] = useState(props.expense.note);
  const [category, setCategory] = useState(props.expense.category);
  const [currency, setCurrency] = useState(props.expense.localCurrencyCode);
  const [price, setPrice] = useState(props.expense.localAmount);
  const [date, setDate] = useState(props.expense.date);

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      id: props.expense.id,
      title,
      note,
      localAmount: price,
      localCurrencyCode: currency,
      category,
      date,
    };

    sendExpense({
      url: "http://localhost:8080/trip",
      body: JSON.stringify(expense),
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      method: "PUT",
      params: {
        tripId: tripId,
      },
    });

    /* 
    setTitle("");
    setNote("");
    setPrice("");
    setDate("");
    setCategory("");
    setCurrency("");
    */
  };

  return (
    <Box component="form" noValidate onSubmit={submitHandler}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Note"
            variant="outlined"
            fullWidth
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Currency"
            variant="outlined"
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label} {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value.toLowerCase()}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          ></TextField>
        </Grid>
      </Grid>
      <Button
        type="submit"
        size="large"
        fullWidth
        variant="contained"
        sx={{ my: 3 }}
        disabled={loading}
      >
        {loading ? props.text.loading : props.text.button}
      </Button>
    </Box>
  );
};

export default UpdateExpenseForm;

const categories = [
  {
    value: "FOOD",
    icon: <FastfoodIcon />,
  },
  {
    value: "FLIGHT",
    icon: <FlightIcon />,
  },
  {
    value: "TICKETS",
    icon: <ConfirmationNumberIcon />,
  },
  {
    value: "HOTEL",
    icon: <HotelIcon />,
  },
  {
    value: "INSURANCE",
    icon: <HealthAndSafetyIcon />,
  },
  {
    value: "SHOPPING",
    icon: <ShoppingBasketIcon />,
  },
  {
    value: "RESTAURANT",
    icon: <RestaurantIcon />,
  },
  {
    value: "TAXES",
    icon: <TollIcon />,
  },
];
