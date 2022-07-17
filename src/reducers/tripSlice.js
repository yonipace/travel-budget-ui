import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trip: null,
};

export const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    update: (state, action) => {
      //update shuld receive an object with id and name
      state.trip = action.payload;
    },
  },
});

export const { update } = tripSlice.actions;

export default tripSlice.reducer;
