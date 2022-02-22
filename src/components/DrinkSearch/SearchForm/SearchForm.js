import { getDrinks } from 'apiCalls/searchCall';
import './SearchForm.css';

function handleChange(event, updateValue) {
  updateValue(event.target.value);
}

function handleSubmit(event, sethDrinks, value) {
  getDrinks(value).then((response) => {
    sethDrinks(response.data.drinks, value);
  });
  event.preventDefault();
}

function SearchForm({ searchValue, sethDrinks, updateDrinkName }) {
  return (
    <form className="Drink-search-form" onSubmit={(event) => handleSubmit(event, sethDrinks, searchValue)}>
      <input type="text" value={searchValue} onChange={(event) => handleChange(event, updateDrinkName)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
