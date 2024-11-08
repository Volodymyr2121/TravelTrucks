import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./Campers/slice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});