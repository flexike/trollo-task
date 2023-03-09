import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import showModalsReducer from "./reducers/showModal";
import taskReducer from "./reducers/taskReducer";
import tableReducer from "./reducers/tableReducer";
import getTables from "./reducers/getTables";
import pageUpdate from "./reducers/pageUpdate";
import deleteTables from "./reducers/deleteTables";

export default configureStore({
  reducer: {
    counter: counterReducer,
    showModal: showModalsReducer,
    taskCreator: taskReducer,
    tableCreator: tableReducer,
    getAll: getTables,
    updater: pageUpdate,
    deleteTable: deleteTables,
  },
});
