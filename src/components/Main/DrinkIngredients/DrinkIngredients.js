import './DrinkIngredients.css';

function DrinkIngredients({ drink }) {
  const ingredients = [];

  if(drink){
    for (let i = 1; i < 16; i++) {
      if (drink[`strIngredient${i}`]) {
        ingredients.push(drink[`strMeasure${i}`] +" " + drink[`strIngredient${i}`]);
      }
    }
  }

  return (
    <section className="Drink-ingredients">
      <h2>Ingredients</h2>
      <ul>
        {drink && ingredients.map((ingredient)=><li>{ingredient}</li>)}
      </ul>
    </section>
  );
}

export default DrinkIngredients;
