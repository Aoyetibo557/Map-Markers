import React from 'react';
import Image from 'next/image';
import {AppDispatch} from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSearches, selectRecentSearches, setDetails, setIsResultCardClicked } from '../../redux/autocomplete-slice';
import { AiOutlineClose } from 'react-icons/ai';
import { SearchResult } from '../../redux/types';

type props = {
    history: SearchResult;
}

export const HistoryCard = ({history}: props) => {

    const dispatch = useDispatch<AppDispatch>();
    const recentSearches = useSelector(selectRecentSearches);

    const filterOutRecentSearch = (searchId: number) => {
        const filtered = recentSearches.filter((item) => item.id !== searchId);
        return filtered;
    }
    
    const handleDelete = (id: any) => {
        const filtered = filterOutRecentSearch(id);
        dispatch(setRecentSearches(filtered));
    }

    const handleHistoryClick = () => {
        dispatch(setDetails(history));
        dispatch(setIsResultCardClicked(true));
    }

    return (
        <div className={`p-2 flex flex-row justify-between`}  >
            <div className={`flex flex-row gap-1 cursor-pointer`} onClick={handleHistoryClick} >
                <Image src='icon-search.svg' width={14} height={14} alt='search icon' className={`text-gray-500`} />
                <p title={history.name} className={`text-[14px] text-gray-800 `}
                    aria-label={history.name}
                    role="listitem"
                >
                    {history.name}
                </p>    
          </div>
            <button type="button" title="delete search term">
                <AiOutlineClose  onClick={() => handleDelete(history?.id)} className={`text-gray-500 text-sm hover:scale-110 ease-in-out hover:font-bold hover:text-black`} />
            </button>
        </div>
    )
}