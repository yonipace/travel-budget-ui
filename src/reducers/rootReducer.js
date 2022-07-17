import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import tripReducer from "../reducers/tripSlice";

export const rootReducer = combineReducers({
  authentication: authReducer,
  trip: tripReducer,
});
