import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  client: "",
  firstName: "",
  lastName: "",
  email: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.client = action.payload.client;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      //this method is used by the root reducer to set the app state when logging out
    },
  },
});

export const isLoggedIn = (state) => state.authentication.isLoggedIn;
export const token = (state) => state.auth.token;

export const { login, logout, clearState } = authSlice.actions;

export default authSlice.reducer;
