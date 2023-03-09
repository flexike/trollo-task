import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    title: "",
    description: "",
    author: "",
  },
  reducers: {
    saveTitle: (state, action) => {
      state.title = action.payload;
    },
    saveDescription: (state, action) => {
      state.description = action.payload;
    },
    saveAuthor: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { saveTitle, saveDescription, saveAuthor } = taskSlice.actions;
export default taskSlice.reducer;
