import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_APP_API_URL } from "../../utils";

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
    return;
  }
  try {
    dispatch(deleteTableStart());
    await axios.delete(`${REACT_APP_API_URL}/delete/table`, { data: { id } });
    dispatch(deleteTableSuccess());
  } catch (error) {
    dispatch(deleteTableFailure(error.message));
  }
};

export default deleteTableSlice.reducer;
