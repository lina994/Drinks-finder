import './DrinkDescription.css';

function DrinkDescription({ drink }) {
  return (
    <div className="Description">
      {drink && <h2 className="Title">{drink.strDrink}</h2>}
      {drink && <div className="Text">{drink.strInstructions}</div>} 
    </div>
  );
}

export default DrinkDescription;
