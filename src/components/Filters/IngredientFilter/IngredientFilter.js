import './IngredientFilter.css';

function handleChange(event, updateValue) {
  updateValue(event.target.value);
}

function handlFocusOut(filterByIngredient) {
  filterByIngredient();
}

function IngredientFilter({ ingredient, updateValue, filterByIngredient }) {
  return (
    <div className="Ingredient-filter">
      <label htmlFor="Ingredient-filter-input">Filter By Ingredient</label>
      <input 
        type="text" 
        id="Ingredient-filter-input" 
        value={ingredient} 
        onChange={(event) => handleChange(event, updateValue)} 
        onBlur={() => handlFocusOut(filterByIngredient)} />
    </div>
  );
}

export default IngredientFilter;
