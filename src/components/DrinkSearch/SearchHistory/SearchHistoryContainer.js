import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';
import { 
  setDrinksActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    searchHistory: state.drinkSearch.searchHistory
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sethDrinks: (drinks) => {
      dispatch(setDrinksActionCreator(drinks, false));
    }
  };
};

const SearchHistoryContainer = connect(mapStateToProps, mapDispatchToProps)(SearchHistory);


export default SearchHistoryContainer;
