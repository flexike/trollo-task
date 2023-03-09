import { createSlice } from "@reduxjs/toolkit";

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    title: "",
  },
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
    deleteTitle: (state, action) => {
      state.title = "";
    },
  },
});

export const { saveTitle, deleteTitle } = tableSlice.actions;
export default tableSlice.reducer;
