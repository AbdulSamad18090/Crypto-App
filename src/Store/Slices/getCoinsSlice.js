import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../Components/baseURL";

// Define an async thunk to fetch coins
export const getCoins = createAsyncThunk("getCoins", async (currency) => {
  try {
    const response = await axios.get(
      `${BaseURL}/coins/markets?vs_currency=${currency}`
    );
    return response.data;
  } catch (error) {
    // Handle errors gracefully
    throw error;
  }
});

// Define slice for managing coins state
const getCoinsSlice = createSlice({
  name: "GetCoinsSlice",
  initialState: {
    coins: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state while fetching coins
      .addCase(getCoins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle successful fetching of coins
      .addCase(getCoins.fulfilled, (state, action) => {
        state.coins = action.payload;
        state.loading = false;
        state.error = null;
      })
      // Handle errors while fetching coins
      .addCase(getCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default getCoinsSlice.reducer;
