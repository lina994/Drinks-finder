import IngredientFilterContainer from './IngredientFilter/IngredientFilterContainer';
import CategoryFilterContainer from './CategoryFilter/CategoryFilterContainer';
import DrinkSortContainer from './DrinkSort/DrinkSortContainer';
import './Filters.css';


function Filters() {
  return (
    <div className="Filters">
      <IngredientFilterContainer />
      <CategoryFilterContainer />
      <DrinkSortContainer />
    </div>
  );
}

export default Filters;
