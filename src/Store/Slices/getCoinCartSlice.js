import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../Components/baseURL";

export const getCoinChartData = createAsyncThunk(
  "getCoinChartData",
  async ({ id, days, currency }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BaseURL}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      );
      return response.data.prices;
    } catch (error) {
      throw error;
    }
  }
);

const getCoinChartSlice = createSlice({
  name: "GetCoinChartSlice",
  initialState: {
    coinChartData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoinChartData.pending, (state) => {
        state.coinChartData = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(getCoinChartData.fulfilled, (state, action) => {
        state.coinChartData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCoinChartData.rejected, (state, action) => {
        state.coinChartData = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getCoinChartSlice.reducer;
