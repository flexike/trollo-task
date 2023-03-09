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
  },
});

export const { saveTitle } = tableSlice.actions;
export default tableSlice.reducer;
