import { connect } from 'react-redux';
import App from './App';
import { 
  setDrinksActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setDrinks: (drinks) => {
      dispatch(setDrinksActionCreator(drinks, null));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;
