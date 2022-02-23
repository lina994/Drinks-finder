import { connect } from 'react-redux';
import Drink from './Drink';
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

const DrinkContainer = connect(mapStateToProps, mapDispatchToProps)(Drink);


export default DrinkContainer;
