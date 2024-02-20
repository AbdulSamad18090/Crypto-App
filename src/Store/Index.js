import { configureStore } from "@reduxjs/toolkit";
import getExchangesSlice from "./Slices/getExchangesSlice";
import getCoinsSlice from "./Slices/getCoinsSlice";
const store = configureStore({
  reducer: {
    getExchangesSlice,
    getCoinsSlice,
  },
});

export default store;
