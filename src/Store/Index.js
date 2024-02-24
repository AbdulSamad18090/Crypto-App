import { configureStore } from "@reduxjs/toolkit";
import getExchangesSlice from "./Slices/getExchangesSlice";
import getCoinsSlice from "./Slices/getCoinsSlice";
import searchTextSlice from "./Slices/searchTextSlice";
import getCoinDetails from "./Slices/getCoinDetailsSlice";

const store = configureStore({
  reducer: {
    getExchangesSlice,
    getCoinsSlice,
    searchTextSlice,
    getCoinDetails,
  },
});

export default store;
