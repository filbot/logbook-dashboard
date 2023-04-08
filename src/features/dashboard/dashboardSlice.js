import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  data: data,
  timestamp: 1533581088278,
  isLoading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearTable: (state) => {
      state.data = [];
    }
  },
});

export const { clearTable } = dashboardSlice.actions;

export default dashboardSlice.reducer;
