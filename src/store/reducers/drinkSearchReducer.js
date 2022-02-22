import { 
  DRINK_SEARCH_VALUE_UPDATE, 
  SET_DRINKS
} from '../actionTypes';

let initialState = {
  searchValue: '',
  searchHistory: []
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
          searchValue: '',
          searchHistory: [...state.searchHistory]
        };
        if (action.value) {
          let index = stateCopy.searchHistory.indexOf(action.value);
          if (index !== -1) {
            stateCopy.searchHistory.splice(index, 1); // remove one item
          }
          stateCopy.searchHistory.push(action.value);
        }
        return stateCopy;
      }
    default:
      return state;
  }
    
}  


  
