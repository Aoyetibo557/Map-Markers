import React, { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch} from '../../redux/store';
import { selectRecentSearches } from '../../redux/autocomplete-slice';
import { HistoryCard } from './historycard';


export const RecentHistory = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recentSearches = useSelector(selectRecentSearches);


  return recentSearches.length > 0 && (
    <div className={`absolute top-14 rounded-md shadow-md z-10 left-0 bg-white w-72 lg:w-[425px] flex flex-col  gap-2`}>
        <div className={`flex flex-row items-center gap-1 bg-gray-50 p-2 `}>
            <p className={`text-[14px] text-gray-700 font-semibold`}>Recently viewed</p>
        </div>
        {recentSearches.map((search) => (
            <HistoryCard key={search.id} history={search} />
        ))}
         {/* <div className={`border-t-[1px] border-gray-300 `}>
            <button className={`text-sm text-gray-500 font-medium`}>clear recent search</button>
        </div> */}
    </div>
  )
}
