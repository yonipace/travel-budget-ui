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

const NewExpenseForm = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const tripId = useSelector((state) => state.trip.trip.id);
  const { error, loading, sendRequest: sendExpense } = useFetch();
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("");

  const titleRef = useRef();
  const noteRef = useRef();
  const priceRef = useRef();
  const dateRef = useRef();

  /*
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
 */

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: titleRef.current.value,
      note: noteRef.current.value,
      localAmount: priceRef.current.value,
      localCurrencyCode: currency,
      category,
      date: dateRef.current.value,
    };

    console.log(expense);

    sendExpense({
      url: "http://localhost:8080/trip",
      body: JSON.stringify(expense),
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      method: "POST",
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
            inputRef={titleRef}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Note"
            variant="outlined"
            fullWidth
            inputRef={noteRef}
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
            inputRef={priceRef}
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
            inputRef={dateRef}
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

export default NewExpenseForm;

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
