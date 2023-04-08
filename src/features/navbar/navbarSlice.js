import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    checkout: (state) => {
      // add 1 to the total
      state.total += 1;
    }
  },
});

export const { checkout } = navbarSlice.actions;

export default navbarSlice.reducer;
