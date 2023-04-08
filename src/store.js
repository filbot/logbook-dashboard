import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import navbarReducer from "./features/navbar/navbarSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    navbar: navbarReducer,
  },
});
