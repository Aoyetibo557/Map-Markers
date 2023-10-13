import React from 'react'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {  setDetails, setIsResultCardClicked } from '../../redux/autocomplete-slice';
import PinIcon from "../../../public/pin.png";
import { SearchResult } from '../../redux/types';


type props = {
  location: SearchResult;
}

export const ResultCard = ({location}: props) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleResultClick = () => {
    dispatch(setDetails(location));
    dispatch(setIsResultCardClicked(true));
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

