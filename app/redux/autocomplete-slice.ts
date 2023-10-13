import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import sampleData from "../const/sample-data.js";
import { SearchResult } from "./types";

interface AutoCompleteState {
  searchInput: string;
  searchResults: SearchResult[];
  details: SearchResult;
  isResultCardClicked: boolean;
}

const initialState: AutoCompleteState = {
  searchInput: "",
  searchResults: [],
  details: {} as SearchResult,
  isResultCardClicked: false,
};

export const autoCompleteSlice = createSlice({
  name: "autoComplete",
  initialState,
  /* The `reducers` property in the `autoCompleteSlice` object defines the actions that can be
  dispatched to update the state of the `autoComplete` slice. */
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<SearchResult[]>) => {
      state.searchResults = action.payload;
    },
    setDetails: (state, action: PayloadAction<SearchResult | any>) => {
      state.details = action.payload;
    },
    setIsResultCardClicked: (state, action: PayloadAction<boolean>) => {
      state.isResultCardClicked = action.payload;
    },
  },
});

export const {
  setSearchInput,
  setSearchResults,
  setDetails,
  setIsResultCardClicked,
} = autoCompleteSlice.actions;

/**
 * exports several functions to select specific properties from the RootState object in
 * a TypeScript application.
 * @param {RootState} state - The `state` parameter is the root state of the Redux store. It contains
 * all the state properties and values of the application.
 */
export const selectSearchInput = (state: RootState) =>
  state.autoComplete.searchInput;
export const selectSearchResults = (state: RootState) =>
  state.autoComplete.searchResults;
export const selectDetails = (state: RootState) => state.autoComplete.details;
export const selectIsResultCardClicked = (state: RootState) =>
  state.autoComplete.isResultCardClicked;

export default autoCompleteSlice.reducer;
