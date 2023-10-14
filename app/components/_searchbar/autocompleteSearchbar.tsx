import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchInput,
  setSearchResults,
  selectSearchInput,
  selectRecentSearches,
} from '../../redux/autocomplete-slice';
import { AppDispatch } from '../../redux/store';
import { RecentHistory } from '../_results/recenthistory';
import sampleData from '../../const/sample-data.js';

const AutoCompleteSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const searchInput = useSelector(selectSearchInput);
  const searchRef = useRef<HTMLDivElement | null>(null);

  const filterResults = (input: string) => {
    return sampleData.filter((result) =>
      result.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  /**
   * The handleInputChange function updates the search input value, filters the search results based on
   * the input, and clears the search results if the input is empty.
   * @param e - React.ChangeEvent<HTMLInputElement> 
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    dispatch(setSearchInput(input));

    const filteredResults = filterResults(input);
    dispatch(setSearchResults(filteredResults as any));

    if (input === '') {
      dispatch(setSearchResults([]));
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowHistory(true);
  };

  /**
   * The handleClickOutside function checks if a click event occurred outside of a specific
   * HTMLDivElement and updates the state to hide a history component.
   * @param e - The parameter `e` is of type `React.MouseEvent<HTMLDivElement, MouseEvent>`.
   */
  const handleClickOutside = (e: any) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowHistory(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`fle flex-col`}>
      <div
        ref={searchRef}
        className={`absolute top-10 left-12 lg:left-14 shadow-md z-10 bg-white w-72 lg:w-1/4 p-3 rounded-sm flex flex-row items-center gap-2`}
      >
        <div className={``}>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M6.472 12.944A6.472 6.472 0 1 1 6.472 0a6.472 6.472 0 0 1 0 12.944zm0-1.438a5.034 5.034 0 1 0 0-10.068 5.034 5.034 0 0 0 0 10.068z" />
              <path d="M9.86 11.166l1.044-1.045 4.896 4.896-1.045 1.044z" />
            </g>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleInputChange}
          onFocus={handleFocus}
          className={`w-full outline-none bg-transparent `}
        />

        {isFocused && searchInput.length === 0 && showHistory && <RecentHistory />}
      </div>
    </div>
  );
};

export default AutoCompleteSearchBar;
