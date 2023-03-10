import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    tasks: 0,
  },
  reducers: {
    incr: (state) => {
      state.value += 1;
    },
    decr: (state) => {
      state.value -= 1;
    },
    double: (state) => {
      state.value += state.value;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
});

export const { incr, decr, double, clear } = counterSlice.actions;
export default counterSlice.reducer;
