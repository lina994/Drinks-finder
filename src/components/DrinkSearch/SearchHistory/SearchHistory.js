import { getDrinks } from 'apiCalls/searchCall'
import './SearchHistory.css';

function handleClick(event, sethDrinks, value) {
  getDrinks(value).then((response) => {
    sethDrinks(response.data.drinks, value);
  });
}

function SearchHistory({ searchHistory, sethDrinks }) {
  return (
    <div className="Drink-search-history">
      <span>last search words:</span>
      { searchHistory.map((e, index) => <span className="History-Element" key={index} onClick={(event) => handleClick(event, sethDrinks, e)}>{e}</span>) }
    </div>
  );
}

export default SearchHistory;
