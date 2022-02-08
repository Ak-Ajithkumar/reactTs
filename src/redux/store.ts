import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducers } from "./todoSlice";

export const store = configureStore({
  
  reducer: combineReducers({
    ["todos"]: todoReducers,
  }),
});

