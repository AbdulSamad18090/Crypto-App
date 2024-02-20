import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseURL } from "../../Components/baseURL";

export const getExchanges = createAsyncThunk("getExchanges", async () => {
  try {
    const response = await axios.get(`${BaseURL}/exchanges`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const getExchangesSlice = createSlice({
  name: "GetExchangesSlice",
  initialState: {
    exchanges: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExchanges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExchanges.fulfilled, (state, action) => {
        state.exchanges = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getExchanges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default getExchangesSlice.reducer;
