import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REACT_APP_API_URL } from "../../utils";

export const createTaskSlice = createSlice({
  name: "createTask",
  initialState: {
    isLoading: false,
    erorr: null,
    tableId: null,
    title: "",
    description: "",
    author: "",
  },
  reducers: {
    selectTaskTable: (state, action) => {
      state.tableId = action.payload;
    },
    setTaskTitle: (state, action) => {
      state.title = action.payload;
    },
    setTaskDescr: (state, action) => {
      state.description = action.payload;
    },
    setTaskAuthor: (state, action) => {
      state.author = action.payload;
    },
    createTaskStart: (state) => {
      state.isLoading = true;
    },
    createTaskSuccess: (state) => {
      state.id = null;
      state.title = "";
      state.description = "";
      state.author = "";
      state.isLoading = false;
      state.error = null;
    },
    createTaskFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setTaskTitle,
  setTaskDescr,
  setTaskAuthor,
  selectTaskTable,
  createTaskStart,
  createTaskSuccess,
  createTaskFailure,
} = createTaskSlice.actions;

export const createTask = () => async (dispatch, getState) => {
  const { tableId, title, description, author } = getState().taskCreator;
  if (!tableId || !title || !description || !author) {
    return console.log("");
  }
  try {
    dispatch(createTaskStart());
    await axios.post(`${REACT_APP_API_URL}/create/task`, {
      title,
      description,
      author,
      tableId,
    });
    dispatch(createTaskSuccess());
  } catch (error) {
    dispatch(createTaskFailure(error.message));
  }
};

export default createTaskSlice.reducer;
