import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: "false",
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
      console.log(action.payload);
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.client = action.payload.client;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = "";
      state.client = "";
    },
  },
});

export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const token = (state) => state.auth.token;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
