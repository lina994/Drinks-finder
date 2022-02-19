import IngredientFilterContainer from './IngredientFilter/IngredientFilterContainer';
import CategoryFilterContainer from './CategoryFilter/CategoryFilterContainer';
import DrinkSortContainer from './DrinkSort/DrinkSortContainer';
import './Filters.css';


function Filters() {
  return (
    <div className="Filters">
      <div className="Drink-filters">
        <IngredientFilterContainer />
        <CategoryFilterContainer />
      </div>
      <DrinkSortContainer />
    </div>
  );
}

export default Filters;
