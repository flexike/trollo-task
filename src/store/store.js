import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import showModalsReducer from "./reducers/showModal";

export default configureStore({
  reducer: {
    counter: counterReducer,
    showModal: showModalsReducer,
  },
});
