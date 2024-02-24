import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../Components/baseURL";

export const getCoinDetail = createAsyncThunk("getCoinDetail", async (id) => {
  try {
    const response = await axios.get(`${BaseURL}/coins/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getCoinDetails = createSlice({
  name: "GetCoinDetails",
  initialState: {
    coinDetail: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoinDetail.pending, (state) => {
        state.coinDetail = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(getCoinDetail.fulfilled, (state, action) => {
        state.coinDetail = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getCoinDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getCoinDetails.reducer;
