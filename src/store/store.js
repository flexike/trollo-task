import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import showModalsReducer from "./reducers/showModal";
import taskReducer from "./reducers/taskReducer";
import tableReducer from "./reducers/tableReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    showModal: showModalsReducer,
    taskCreator: taskReducer,
    tableCreator: tableReducer,
  },
});
