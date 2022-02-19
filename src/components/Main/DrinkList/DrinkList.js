import ListElement from './ListElement/ListElement';
import './DrinkList.css';

function DrinkList({ drinks, selectedElementId, selectDrink }) {
  return (
    <div className="Drink-list">
      {drinks.map((drink) => <ListElement 
        key={drink.idDrink}
        drinkId={drink.idDrink}
        drinkImg={drink.strDrinkThumb}
        drinkName={drink.strDrink}
        dateModified={drink.dateModified} 
        selectedElementId={selectedElementId}
        selectDrink={selectDrink} />)}
    </div>
  );
}

export default DrinkList;
