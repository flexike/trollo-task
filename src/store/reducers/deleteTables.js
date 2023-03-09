import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTableSlice = createSlice({
  name: "deleteTable",
  initialState: {
    id: null,
    isLoading: false,
    erorr: null,
  },
  reducers: {
    selectTable: (state, action) => {
      state.id = action.payload;
    },
    deleteTableStart: (state) => {
      state.isLoading = true;
    },
    deleteTableSuccess: (state) => {
      state.id = null;
      state.isLoading = false;
      state.error = null;
    },
    deleteTableFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  selectTable,
  deleteTableStart,
  deleteTableSuccess,
  deleteTableFailure,
} = deleteTableSlice.actions;

export const deleteTable = () => async (dispatch, getState) => {
  const { id } = getState().deleteTable;
  if (!id) {
    return; // If there's no id in the state, don't attempt to delete anything
  }
  try {
    dispatch(deleteTableStart());
    await axios.delete(`http://localhost:3001/delete/table`, { data: { id } });
    dispatch(deleteTableSuccess());
  } catch (error) {
    dispatch(deleteTableFailure(error.message));
  }
};

export default deleteTableSlice.reducer;
