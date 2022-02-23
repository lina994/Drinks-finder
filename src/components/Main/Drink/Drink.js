import DrinkImage from './DrinkImage/DrinkImage';
import DrinkDescription from './DrinkDescription/DrinkDescription';
import DrinkIngredients from './DrinkIngredients/DrinkIngredients';
import './Drink.css';

function Drink({ drink }) {
  return (
    <section className="Drink">
      <DrinkImage drink={drink} />
      <DrinkDescription drink={drink} />
      <DrinkIngredients drink={drink} />
    </section>
  );
}

export default Drink;
