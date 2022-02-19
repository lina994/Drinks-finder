import {
    DRINK_SEARCH_VALUE_UPDATE, 
    SET_DRINKS,
    SELECT_DRINK
} from './actionTypes';

export function updateDrinkSearchValueActionCreator(value) {
    return {
      type: DRINK_SEARCH_VALUE_UPDATE,
      value: value
    };
  }
  
export function setDrinksActionCreator(drinks, addToHistory) {
  console.log(drinks);
  return {
    type: SET_DRINKS,
    drinks: drinks,
    addToHistory: addToHistory
  };
}

export function selectDrinkActionCreator(drinkId) {
  console.log(drinkId);
  return {
    type: SELECT_DRINK,
    drinkId: drinkId
  };
}



