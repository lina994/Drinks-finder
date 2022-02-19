import { connect } from 'react-redux';
import DrinkSort from './DrinkSort';
import { 
  selectSortActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    sortMethod: state.filters.sortMethod
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateSortMethod: (sortMethod) => {
      dispatch(selectSortActionCreator(sortMethod));
    }
  };
};

const DrinkSortContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkSort);


export default DrinkSortContainer;
