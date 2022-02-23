import Filters from './Filters/Filters';
import DrinkListContainer from './DrinkList/DrinkListContainer';
import DrinkContainer from './Drink/DrinkContainer';
import './Main.css';

function Main() {
  return (
    <main className="Main">
      <Filters />
      <DrinkListContainer />
      <DrinkContainer />
    </main>
  );
}

export default Main;
