import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { 
  updateDrinkSearchValueActionCreator, 
  setDrinksActionCreator 
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    searchValue: state.drinkSearch.searchValue
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateDrinkName: (value) => {
      dispatch(updateDrinkSearchValueActionCreator(value));
    },
    sethDrinks: (drinks) => {
      dispatch(setDrinksActionCreator(drinks, true));
    }
  };
};

const SearchFormContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);


export default SearchFormContainer;
