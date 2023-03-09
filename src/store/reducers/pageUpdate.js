import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
  name: "update",
  initialState: {
    update: 0,
  },
  reducers: {
    up: (state) => {
      state.update += 1;
    },
  },
});

export const { up } = updateSlice.actions;
export default updateSlice.reducer;
