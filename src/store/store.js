import { createStore, combineReducers } from "redux";
import { drinkSearchReducer } from './reducers/drinkSearchReducer';
import { mainReducer } from './reducers/mainReducer';

let reducers = combineReducers({
  drinkSearch: drinkSearchReducer,
  main: mainReducer
});
  
let store = createStore(reducers);
  
export default store;
  