import { configureStore } from "@reduxjs/toolkit";
import getExchangesSlice from "./Slices/getExchangesSlice";
import getCoinsSlice from "./Slices/getCoinsSlice";
import searchTextSlice from "./Slices/searchTextSlice";
import getCoinDetails from "./Slices/getCoinDetailsSlice";
import getCoinChartSlice from "./Slices/getCoinCartSlice";

const store = configureStore({
  reducer: {
    getExchangesSlice,
    getCoinsSlice,
    searchTextSlice,
    getCoinDetails,
    getCoinChartSlice,
  },
});

export default store;
