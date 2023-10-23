"use client"
import AutoCompleteSearchBar from './components/_searchbar/autocompleteSearchbar'
import ResultList from './components/_results/resultlist';
import { useSelector } from 'react-redux';
import {  selectSearchResults } from './redux/autocomplete-slice';
import dynamic from 'next/dynamic';

const Map = dynamic(
    () => import( './components/_map/map'),
    { ssr: false }
  )


export default function HomePage() {
  const searchResults = useSelector(selectSearchResults);
  return (
    <div>
      <AutoCompleteSearchBar />
      <ResultList />
      <Map locations={searchResults} />
    </div>
  )
}
