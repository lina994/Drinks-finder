import './DrinkDescription.css';

function DrinkDescription({ drink }) {
  return (
    <section className="Drink-description">
      <div className="Img-wrapper">
        {drink && <img src={drink.strDrinkThumb} alt="drink img" />}
      </div>
      <div className="Description-text">
        {drink && <h2 className="Title">{drink.strDrink}</h2>}
        {drink && <div className="Text">{drink.strInstructions}</div>} 
      </div>
    </section>
  );
}

export default DrinkDescription;
