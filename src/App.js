import { useEffect } from "react";
import DrinkSearch from 'components/DrinkSearch/DrinkSearch';
import Main from 'components/Main/Main';
import { getRandomDrink } from 'apiCalls/searchCall';
import './App.css';


function getAndSetRandomDrink(setDrinks) {
  getRandomDrink().then((response) => {
    setDrinks(response.data.drinks);
  });
}

function App({ setDrinks }) {

  useEffect(() => {
    getAndSetRandomDrink(setDrinks);
  });

  return (
    <div className="App">
      <header className="App-header">Drinks Finder</header>
      <DrinkSearch />
      <Main />
    </div>
  );
}

export default App;
