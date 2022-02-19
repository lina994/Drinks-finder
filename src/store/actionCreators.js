import {
    DRINK_SEARCH_VALUE_UPDATE, 
    SET_DRINKS,
    SELECT_DRINK,
    UPDATE_INGREDIENT_FIELD,
    FILTER_BY_INGREDIENT,
    SELECT_CATEGORY,
    SELECT_SORT
} from './actionTypes';

export function updateDrinkSearchValueActionCreator(value) {
  return {
      type: DRINK_SEARCH_VALUE_UPDATE,
      value: value
    };
  }
  
export function setDrinksActionCreator(drinks, addToHistory) {
  return {
    type: SET_DRINKS,
    drinks: drinks,
    addToHistory: addToHistory
  };
}

export function selectDrinkActionCreator(drinkId) {
  return {
    type: SELECT_DRINK,
    drinkId: drinkId
  };
}

export function updateIngredientFieledActionCreator(value) {
  return {
    type: UPDATE_INGREDIENT_FIELD,
    value: value
  };
}

export function filterByIngredientActionCreator(ingredient) {
  return {
    type: FILTER_BY_INGREDIENT,
    ingredient: ingredient
  };
}

export function selectCategoryActionCreator(category) {
  return {
    type: SELECT_CATEGORY,
    category: category
  };
}

export function selectSortActionCreator(sortMethod) {
  return {
    type: SELECT_SORT,
    sortMethod: sortMethod
  };
}

