import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTaskSlice = createSlice({
  name: "deleteTask",
  initialState: {
    id: null,
    isLoading: false,
    erorr: null,
  },
  reducers: {
    selectTask: (state, action) => {
      state.id = action.payload;
    },
    deleteTaskStart: (state) => {
      state.isLoading = true;
    },
    deleteTaskSuccess: (state) => {
      state.id = null;
      state.isLoading = false;
      state.error = null;
    },
    deleteTaskFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  selectTask,
  deleteTaskStart,
  deleteTaskSuccess,
  deleteTaskFailure,
} = deleteTaskSlice.actions;

export const deleteTask = () => async (dispatch, getState) => {
  const { id } = getState().deleteTask;
  if (!id) {
    return;
  }
  try {
    dispatch(deleteTaskStart());
    await axios.delete(`http://localhost:3001/delete/task`, { data: { id } });
    dispatch(deleteTaskSuccess());
  } catch (error) {
    dispatch(deleteTaskFailure(error.message));
  }
};

export default deleteTaskSlice.reducer;
