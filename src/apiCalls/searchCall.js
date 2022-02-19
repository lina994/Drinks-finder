import instance from './axiosConfig';


export function getDrinks(drinkName) {
  try {
    return instance.get('/json/v1/1/search.php', {
      params: {
        s: drinkName
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export function getRandomDrink() {
  try {
    return instance.get('/json/v1/1/random.php');
  } catch (error) {
    console.log(error);
  }
}

