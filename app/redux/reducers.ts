/* This code is importing the `combineReducers` function from the `@reduxjs/toolkit` library and the
`autoCompleteReducer` from the `../redux/autocomplete-slice` file. */
import { combineReducers } from "@reduxjs/toolkit";
import autoCompleteReducer from "../redux/autocomplete-slice";

const rootReducer = combineReducers({
  autoComplete: autoCompleteReducer,
  //   add the other reducrs here
});
export default rootReducer;
