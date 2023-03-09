import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "showModal",
  initialState: {
    mCreateTaskVisability: false,
    mCreateTableVisability: false,
    mDeleteTaskVisability: false,
    mDeleteTableVisability: false,
  },
  reducers: {
    onCreateTask: (state) => {
      state.mCreateTaskVisability = true;
    },
    offCreateTask: (state) => {
      state.mCreateTaskVisability = false;
    },
    onCreateTable: (state) => {
      state.mCreateTableVisability = true;
    },
    offCreateTable: (state) => {
      state.mCreateTableVisability = false;
    },
    onDeleteTask: (state) => {
      state.mDeleteTaskVisability = true;
    },
    offDeleteTask: (state) => {
      state.mDeleteTaskVisability = false;
    },
    onDeleteTable: (state) => {
      state.mDeleteTableVisability = true;
    },
    offDeleteTable: (state) => {
      state.mDeleteTableVisability = false;
    },
  },
});

export const {
  onCreateTask,
  offCreateTask,
  onCreateTable,
  offCreateTable,
  onDeleteTask,
  offDeleteTask,
  onDeleteTable,
  offDeleteTable,
} = modalSlice.actions;
export default modalSlice.reducer;
