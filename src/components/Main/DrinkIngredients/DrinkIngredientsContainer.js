import { connect } from 'react-redux';
import DrinkIngredients from './DrinkIngredients';
import { 
  
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    drink: state.main.selectedDrink
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
  };
};

const DrinkIngredientsContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkIngredients);


export default DrinkIngredientsContainer;
