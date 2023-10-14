import React from 'react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {  setDetails, setIsResultCardClicked, setRecentSearches, selectRecentSearches } from '../../redux/autocomplete-slice';
import PinIcon from "../../../public/pin.png";
import { SearchResult } from '../../redux/types';


type props = {
  location: SearchResult;
}

export const ResultCard = ({location}: props) => {
  const dispatch = useDispatch<AppDispatch>();
  const recentSearches = useSelector(selectRecentSearches);

  // i need a function to first check if the location is already in the recent searches array, if it is then do not add it again
  // if it is not then add it to the array
  const addLocationToRecentSearches = () => {
    if(recentSearches.length === 0) {
      dispatch(setRecentSearches([location]));
    } else {
      const isLocationInRecentSearches = recentSearches.some((recentSearch) => recentSearch.name === location.name);
      if(!isLocationInRecentSearches) {
        dispatch(setRecentSearches([...recentSearches, location]));
      }
    }
  }
  const handleResultClick = () => {
    dispatch(setDetails(location));
    dispatch(setIsResultCardClicked(true));
    addLocationToRecentSearches();
  }

  return (
    <div className={`cursor-pointer hover:bg-slate-100 flex flex-row items-center justify-between p-3 gap-2 group`}>
       <div className={`flex flex-row items-center gap-2`}>
         <Image src={PinIcon} alt="pin" width={35} height={35} />
          <div>
              <h2 className={`font-semibold text-[14px]`}>{location.name}</h2>
              <p className={`text-sm text-gray-400`}>{location.location.lat} {location.location.lon}</p>
          </div>
       </div>
         
        <button className={`lg:hidden group-hover:block text-gray-600 font-medium text-[12px] rounded-sm text-center hover:text-gray-800 hover:underline `} title={"View Details"} 
          onClick={handleResultClick}
        >View Details</button>
    </div>
  )
}

