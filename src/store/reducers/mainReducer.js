import { SET_DRINKS, SELECT_DRINK } from '../actionTypes';

let initialState = {
  drinks: [],
  selectedElementId: -1,
  selectedDrink: null
}


export function mainReducer(state = initialState, action) {
  
  switch (action.type) {
    case SET_DRINKS:
      {
        let stateCopy = {
          ...state,
          drinks: [...action.drinks],
          selectedElementId: action.drinks.length > 0 ? action.drinks[0].idDrink : -1,
          selectedDrink: action.drinks.length > 0 ? action.drinks[0] : null
        };
        return stateCopy;
      }
    case SELECT_DRINK:
      {
        let stateCopy = {
          ...state,
          selectedElementId: action.drinkId,
          selectedDrink: state.drinks.filter((drink) => drink.idDrink === action.drinkId)[0]
        };
        return stateCopy;
      }  
    default:
      return state;
  }
    
}  


  
