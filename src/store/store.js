import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import showModalsReducer from "./reducers/showModal";
import taskReducer from "./reducers/taskReducer";
import tableReducer from "./reducers/tableReducer";
import getTables from "./reducers/getTables";
import pageUpdate from "./reducers/pageUpdate";
import deleteTables from "./reducers/deleteTables";
import deleteTask from "./reducers/deleteTask";
import tasksUpdater from "./reducers/tasksUpdater";

export default configureStore({
  reducer: {
    counter: counterReducer,
    tasksUpdater: tasksUpdater,
    showModal: showModalsReducer,
    taskCreator: taskReducer,
    tableCreator: tableReducer,
    getAll: getTables,
    updater: pageUpdate,
    deleteTable: deleteTables,
    deleteTask: deleteTask,
  },
});
