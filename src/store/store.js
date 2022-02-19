import { createStore, combineReducers } from "redux";
import { drinkSearchReducer } from './reducers/drinkSearchReducer';
import { mainReducer } from './reducers/mainReducer';
import { filterReducer } from './reducers/filterReducer';

let reducers = combineReducers({
  drinkSearch: drinkSearchReducer,
  main: mainReducer,
  filters: filterReducer
});
  
let store = createStore(reducers);
  
export default store;
  