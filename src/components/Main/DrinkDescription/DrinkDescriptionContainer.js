import { connect } from 'react-redux';
import DrinkDescription from './DrinkDescription';
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

const DrinkDescriptionContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkDescription);


export default DrinkDescriptionContainer;
