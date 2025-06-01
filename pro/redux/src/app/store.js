import { configureStore } from "@reduxjs/toolkit";
import counterRe from "../features/counters/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterRe,
  },
});

export default store;
