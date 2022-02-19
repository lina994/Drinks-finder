import { connect } from 'react-redux';
import DrinkList from './DrinkList';
import { 
  selectDrinkActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    drinks: state.main.drinks,
    selectedElementId: state.main.selectedElementId
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    selectDrink: (drinkId) => {
      dispatch(selectDrinkActionCreator(drinkId));
    }
  };
};

const DrinkListContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkList);


export default DrinkListContainer;
