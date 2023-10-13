"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchInput, setSearchResults,  selectSearchInput, selectSearchResults } from '../../redux/autocomplete-slice';
import {AppDispatch} from '../../redux/store';
import sampleData from '../../const/sample-data.js';

const AutoCompleteSearchBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchInput = useSelector(selectSearchInput);

    const filterResults = (input: any) => {
        return sampleData.filter((result) =>
            result.name.toLowerCase().includes(input.toLowerCase())
        );
    };

    /**
     * The handleInputChange function updates the search input value, filters the search results based
     * on the input, and clears the results if the input is empty.
     * @param e - React.ChangeEvent<HTMLInputElement>
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        dispatch(setSearchInput(input));

        // filter the results based on the input
        const filterdResults = filterResults(input);
        dispatch(setSearchResults(filterdResults as any));

        // if the input is empty, clear the results
        if (input === "") {
            dispatch(setSearchResults([]));
        }
    };


  return (
    <div className={`absolute top-10 left-12 lg:left-14 shadow-md z-10 bg-white w-80 lg:w-1/4 p-3 rounded-sm flex flex-row items-center gap-2`}>
        <div className={``}>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z"/><path d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z"/></g></svg>
        </div>
        <input
            type="text"
            placeholder="Search..."
            value = {searchInput}
            onChange={handleInputChange}
            className={`w-full outline-none bg-transparent `}
        />
    </div>
  )
}

export default AutoCompleteSearchBar