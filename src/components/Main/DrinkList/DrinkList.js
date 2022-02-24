import { useState } from 'react';
import ListElement from './ListElement/ListElement';
import './DrinkList.css';

function _isContainIngredient(drink, ingredient) {
  let currentIngredient;
  for (let i = 1; i < 16; i++) {
    currentIngredient = drink[`strIngredient${i}`];
    if (currentIngredient
      && currentIngredient.toLowerCase().includes(ingredient.toLowerCase())) {
        return true;
    }
  }
  return false;
}

function _sortByNameAsc(drinks) { // ascending
  drinks.sort(function (x, y) {
    if (x.strDrink > y.strDrink) {
      return 1;
    }
    if (y.strDrink > x.strDrink) {
      return -1;
    }
      return 0;
    }
  );
}

function _sortByDateDesc(drinks) { // descending
  drinks.sort(function (x, y) {
    if (x.dateModified > y.dateModified) {
      return -1;
    }
    if (y.dateModified > x.dateModified) {
      return 1;
    }
      return 0;
    }
  );
}

function DrinkList({ drinks, selectedElementId, ingredientName, category, sortMethod, selectDrink }) {
  let [isOpen, setIsOpen] = useState(false);

  let filtredList = drinks;
  if (ingredientName) {
    filtredList = filtredList.filter((drink) => _isContainIngredient(drink, ingredientName));
  }
  if (category) {
    filtredList = filtredList.filter((drink) => drink.strCategory === category);
  }
  if (sortMethod === 'name-asc') {
    _sortByNameAsc(filtredList);
  }
  if (sortMethod === 'data-dec') {
    _sortByDateDesc(filtredList);
  }
  
  return (
    <div className="Drink-list">
      <div className="Open-wrapper">
          <div className="Open-buttom" onClick={() => setIsOpen(true)}>Open drink list</div>
        </div>
      <div className={`Drink-list-content${isOpen ? " open" : ""}`}>
        <div className="Close-wrapper">
          <div className="Close-buttom" onClick={() => setIsOpen(false)}>X</div>
        </div>
        {filtredList.map((drink) => <ListElement 
          key={drink.idDrink}
          drinkId={drink.idDrink}
          drinkImg={drink.strDrinkThumb}
          drinkName={drink.strDrink}
          dateModified={drink.dateModified} 
          selectedElementId={selectedElementId}
          selectDrink={selectDrink} />)}
      </div>
    </div>
  );
}

export default DrinkList;
