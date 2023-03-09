import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import configureStore from "../store.js";

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
      console.log(action.payload);
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
  const tableId = await getState().createTask;
  const title = await configureStore.getState();
  const description = await getState().createTask;
  const author = await getState().createTask;
  console.log(tableId, title, description, author);
  if (!tableId || !title || !description || !author) {
    return console.log(" ");
  }
  try {
    dispatch(createTaskStart());
    await axios.post("http://localhost:3001/create/task", {
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
