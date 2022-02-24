import SearchFormContainer from './SearchForm/SearchFormContainer';
import SearchHistoryContainer from './SearchHistory/SearchHistoryContainer';
import './DrinkSearch.css';


function DrinkSearch() {
  return (
    <div className="Drink-search">
      <div className="Drink-search-inner">
        <SearchFormContainer />
        <SearchHistoryContainer />
      </div>
    </div>
  );
}

export default DrinkSearch;
