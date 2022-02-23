import './DrinkImage.css';

function DrinkImage({ drink }) {
  return (
    <div className="Drink-iamge">
      {drink && <img src={drink.strDrinkThumb} alt="drink img" />}
    </div>
  );
}

export default DrinkImage;
