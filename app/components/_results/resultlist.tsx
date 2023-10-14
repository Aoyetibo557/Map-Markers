import React from 'react';
import { useSelector } from 'react-redux';
import { selectSearchInput, selectSearchResults } from '../../redux/autocomplete-slice';
import { ResultCard } from './resultcard';
import { SearchResult } from "../../redux/types";


const ResultList = () => {
  const searchResults = useSelector(selectSearchResults);
  const searchInput = useSelector(selectSearchInput);

  const hasResults = searchResults.length > 0;

  return searchInput.length > 0 && (
    <div className={`absolute top-24 left-12 lg:left-14 z-10 bg-white w-72 lg:w-1/4 rounded-sm shadow-sm`}>
      <div className={`bg-blue-500 p-3 font-medium text-slate-100 ${!hasResults && 'rounded-t-sm'}`}>
        <p className={`text-sm`}>{hasResults ? `Found ${searchResults.length} Result` : 'No Results Found'}</p>
      </div>
      {hasResults && (
        <div>
          {searchResults?.map((result) => (
            <div key={result.id} className={`border-b border-gray-200`}>
              <ResultCard location={result} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultList;
