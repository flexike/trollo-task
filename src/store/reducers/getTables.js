import { createSlice } from "@reduxjs/toolkit";
import { REACT_APP_API_URL } from "../../utils";
import axios from "axios";

export const getAllSlice = createSlice({
  name: "getAll",
  initialState: {
    all: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.all = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  getAllSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const { data } = await axios.get(`${REACT_APP_API_URL}`);
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default getAllSlice.reducer;
