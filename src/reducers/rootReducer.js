import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authReducer from "../reducers/authSlice";
import tripReducer from "../reducers/tripSlice";

const appReducer = combineReducers({
  authentication: authReducer,
  trip: tripReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    // this applies to all keys defined in persistConfig(s)
    storage.removeItem("persist:root");

    state = {};
  }
  return appReducer(state, action);
};
