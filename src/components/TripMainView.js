import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
import MenuDrawer from "./MenuDrawer";

const TripMainView = () => {
  const [openAddExpense, setOpenAddExpense] = useState(false);

  const addExpenseHandler = () => {
    setOpenAddExpense(true);
  };
  const cancelAddExpenseHandler = () => {
    setOpenAddExpense(false);
  };

  return (
    <div>
      <AppBar sx={{ bgcolor: "primary.dark" }}>
        <Toolbar>
          <MenuDrawer />
          <Typography variant="h5" sx={{ mx: 1 }}>
            Rome 2022
          </Typography>
        </Toolbar>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          mx={3}
          mb={1}
          sx={{
            borderStyle: "solid",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h6">Total Spent:</Typography>
          <Typography variant="h6">500/10,000 (₪)</Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          px={2}
          my={1}
        >
          <Typography variant="body">Rome, Italy</Typography>
          <Typography variant="body">15/05/2022 - 21/05/2022</Typography>
        </Stack>
      </AppBar>
      {!openAddExpense && (
        <ExpenseList
          expenses={dummyExpenses}
          handleAddExpense={addExpenseHandler}
        />
      )}
      {openAddExpense && (
        <AddExpenseForm handleCancel={cancelAddExpenseHandler} />
      )}
    </div>
  );
};

export default TripMainView;

const dummyExpenses = [
  {
    id: 1,
    title: "Sausage - Chorizo",
    note: "Curabitur at ipsum ac tellus semper interdum.",
    category: "Games",
    amount: 668.94,
    currency: "EUR",
    date: "14/07/2021",
    user: "Delora Oak",
  },
  {
    id: 2,
    title: "Daves Island Stinger",
    note: "Integer ac leo.",
    category: "Automotive",
    amount: 194.2,
    currency: "CNY",
    date: "08/07/2021",
    user: "Arabella Berzin",
  },
  {
    id: 3,
    title: "Yoplait - Strawbrasp Peac",
    note: "Integer ac leo.",
    category: "Baby",
    amount: 456.02,
    currency: "EUR",
    date: "18/01/2022",
    user: "Jeremy Yitzhok",
  },
  {
    id: 4,
    title: "Coffee - Flavoured",
    note: "Morbi porttitor lorem id ligula.",
    category: "Clothing",
    amount: 377.45,
    currency: "IDR",
    date: "23/01/2022",
    user: "Kristyn Rubinshtein",
  },
  {
    id: 5,
    title: "Remy Red Berry Infusion",
    note: "In hac habitasse platea dictumst.",
    category: "Outdoors",
    amount: 641.61,
    currency: "PLN",
    date: "01/01/2022",
    user: "Marchall Scurrey",
  },
  {
    id: 6,
    title: "Broom - Push",
    note: "In sagittis dui vel nisl.",
    category: "Electronics",
    amount: 606.18,
    currency: "IDR",
    date: "13/12/2021",
    user: "Connie Kilborn",
  },
  {
    id: 7,
    title: "Flavouring - Raspberry",
    note: "Donec semper sapien a libero.",
    category: "Music",
    amount: 529.24,
    currency: "CNY",
    date: "27/10/2021",
    user: "Nola O'Bradain",
  },
  {
    id: 8,
    title: "Yoplait - Strawbrasp Peac",
    note: "Etiam faucibus cursus urna.",
    category: "Games",
    amount: 226.4,
    currency: "BRL",
    date: "14/10/2021",
    user: "Geneva Solley",
  },
  {
    id: 9,
    title: "Chips Potato Swt Chilli Sour",
    note: "Duis aliquam convallis nunc.",
    category: "Beauty",
    amount: 438.99,
    currency: "PKR",
    date: "06/12/2021",
    user: "Delinda Fordy",
  },
  {
    id: 10,
    title: "Lemonade - Kiwi, 591 Ml",
    note: "Proin eu mi.",
    category: "Movies",
    amount: 20.16,
    currency: "IDR",
    date: "08/01/2022",
    user: "Allie Wallett",
  },
];
