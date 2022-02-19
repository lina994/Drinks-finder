import DrinkListContainer from './DrinkList/DrinkListContainer';
import DrinkDescriptionContainer from './DrinkDescription/DrinkDescriptionContainer';
import DrinkIngredientsContainer from './DrinkIngredients/DrinkIngredientsContainer';
import './Main.css';

function Main() {
  return (
    <main className="Main">
      <DrinkListContainer />
      <DrinkDescriptionContainer />
      <DrinkIngredientsContainer />
    </main>
  );
}

export default Main;
