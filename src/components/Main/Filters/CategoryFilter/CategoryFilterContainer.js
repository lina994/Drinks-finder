import { connect } from 'react-redux';
import CategoryFilter from './CategoryFilter';
import { 
  selectCategoryActionCreator
} from 'store/actionCreators';


let mapStateToProps = (state) => {
  return {
    categories: state.filters.categories
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (category) => {
      dispatch(selectCategoryActionCreator(category));
    }
  };
};

const CategoryFilterContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);


export default CategoryFilterContainer;
