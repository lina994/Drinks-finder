import { connect } from 'react-redux';
import IngredientFilter from './IngredientFilter';
import { 
  updateIngredientFieledActionCreator,
  filterByIngredientActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    ingredient: state.filters.ingredientFieldValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateValue: (value) => {
      dispatch(updateIngredientFieledActionCreator(value));
    },
    filterByIngredient: () => {
      dispatch(filterByIngredientActionCreator());
    }
  };
};

const IngredientFilterContainer = connect(mapStateToProps, mapDispatchToProps)(IngredientFilter);


export default IngredientFilterContainer;
