import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import UserMainView from "../components/UserView/UserMainView";
import TripMainView from "../components/TripView/TripMainView";
import Trip from "./Trip";

const Routes = () => {
  return (
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
      <Route path="/trip-details">
        <Trip />
      </Route>
    </Switch>
  );
};

export default Routes;
