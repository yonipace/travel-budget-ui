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
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HotelIcon from "@mui/icons-material/Hotel";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FlightIcon from "@mui/icons-material/Flight";
import TollIcon from "@mui/icons-material/Toll";
import { currencies } from "../global_data/currencyData";

const AddExpenseForm = (props) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title,
      note,
      price,
      currency,
      category,
      date,
    };
    console.log(expense);

    setTitle("");
    setNote("");
    setPrice("");
    setDate("");
    setCategory("");
    setCurrency("");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: "sm", p: 3, mt: 20 }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" sx={{ color: "primary.main" }}>
              enter expense details
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
          <Box component="form" noValidate onSubmit={submitHandler}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  variant="standard"
                  fullWidth
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Note"
                  variant="standard"
                  fullWidth
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  value={note}
                ></TextField>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  fullWidth
                  select
                  label="Currency"
                  variant="standard"
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
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  variant="standard"
                  type="number"
                  fullWidth
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  select
                  label="Category"
                  variant="standard"
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
              <Grid item xs={6}>
                <TextField
                  label="Date"
                  variant="standard"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                  value={date}
                ></TextField>
              </Grid>
            </Grid>
            <Button
              type="submit"
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
            >
              Add Expense
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default AddExpenseForm;

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
