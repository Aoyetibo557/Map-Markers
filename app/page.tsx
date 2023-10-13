import AutoCompleteSearchBar from './components/_searchbar/autocompleteSearchbar'
import ResultList from './components/_results/resultlist';
import Map from './components/_map/map';
import { useSelector } from 'react-redux';
import {  selectSearchResults } from './redux/autocomplete-slice';

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
