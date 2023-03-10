import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: null,
  },
  reducers: {
    saveTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { saveTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
