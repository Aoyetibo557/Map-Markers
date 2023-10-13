import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// this is the store and it has all the reducers from the reducers file (autoCompleteReducer, ...)
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
