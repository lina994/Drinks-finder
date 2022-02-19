import { 
  SET_DRINKS,
  UPDATE_INGREDIENT_FIELD,
  FILTER_BY_INGREDIENT,
  SELECT_CATEGORY,
  SELECT_SORT
} from '../actionTypes';

let initialState = {
  ingredientFieldValue: '',
  ingredientName: null,
  categories: [],
  selectedCategory: null,
  sortMethod: null // null, 'name-asc', 'data-dec'
}



export function filterReducer(state = initialState, action) {
  
  switch (action.type) {
    case SET_DRINKS:
      {
        let stateCopy = {
          ...state,
          ingredientFieldValue: '',
          ingredientName: null,
          categories: [...new Set(action.drinks.map((drink) => drink.strCategory))],
          selectedCategory: null,
          sortMethod: null
        };
        return stateCopy;
      }
    case UPDATE_INGREDIENT_FIELD:
      {
        let stateCopy = {
          ...state,
          ingredientFieldValue: action.value
        };
        return stateCopy;
      }
    case FILTER_BY_INGREDIENT:
      {
        let stateCopy = {
          ...state,
          ingredientName: state.ingredientFieldValue !== '' ? state.ingredientFieldValue : null
        };
        return stateCopy;
      }
    case SELECT_CATEGORY:
      {
        let stateCopy = {
          ...state,
          selectedCategory: action.category
        };
        return stateCopy;
      }
    case SELECT_SORT:
      {
        let stateCopy = {
          ...state,
          sortMethod: action.sortMethod
        };
        return stateCopy;
      }
    default:
      return state;
  }
}  

