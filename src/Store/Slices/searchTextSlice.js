import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "searchText",
  initialState: {
    searchText: "",
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
