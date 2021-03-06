import "./App.css";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import UserMainView from "./components/UserView/UserMainView";
import TripMainView from "./components/TripView/TripMainView";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#01A247",
    },
    secondary: {
      main: "#F04B19",
    },
    background: {
      default: "#d5d5d5",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/user">
          <UserMainView />
        </Route>
        <Route path="/trip">
          <TripMainView />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
