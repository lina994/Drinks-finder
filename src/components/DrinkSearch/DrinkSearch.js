import SearchFormContainer from './SearchForm/SearchFormContainer';
import SearchHistoryContainer from './SearchHistory/SearchHistoryContainer';
import './DrinkSearch.css';


function DrinkSearch() {
  return (
    <div className="Drink-search">
      <SearchFormContainer />
      <SearchHistoryContainer />
    </div>
  );
}

export default DrinkSearch;
