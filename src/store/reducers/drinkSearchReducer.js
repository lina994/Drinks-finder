import { 
  DRINK_SEARCH_VALUE_UPDATE, 
  SET_DRINKS
} from '../actionTypes';

let initialState = {
  searchValue: '',
  searchHistory: [] // max 4 last values
}


export function drinkSearchReducer(state = initialState, action) {
  
  switch (action.type) {
    case DRINK_SEARCH_VALUE_UPDATE:
      {
        let stateCopy = {
          ...state,
          searchValue: action.value
        };
        return stateCopy;
      }
    case SET_DRINKS:
      {
        let stateCopy = {
          ...state,
          searchValue: ''
        };
        if (action.addToHistory) {
          stateCopy.searchHistory = [...state.searchHistory, state.searchValue]
        }
        return stateCopy;
      }
    default:
      return state;
  }
    
}  


  
