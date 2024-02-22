import { configureStore } from "@reduxjs/toolkit";
import getExchangesSlice from "./Slices/getExchangesSlice";
import getCoinsSlice from "./Slices/getCoinsSlice";
import searchTextSlice from "./Slices/searchTextSlice";

const store = configureStore({
  reducer: {
    getExchangesSlice,
    getCoinsSlice,
    searchTextSlice,
  },
});

export default store;
