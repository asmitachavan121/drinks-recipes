import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TitleHeader } from "./components/title-header";
import { Cards } from "./components/cards";
import { Search } from "./components/search";

var axios = require("axios").default;

function App() {
  const [drinks, setDrinks] = React.useState([]);
  const [originalDrinks, setOriginalDrinks] = React.useState([]);
  const [searchString, setSearchString] = React.useState('')

  React.useEffect(async () => {

    const getData = async () => {
      var options = {
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
      };
      const response = await axios.request(options);
      const mappedDrinks = mapDrinks(response.data);
      setDrinks(mappedDrinks);
      setOriginalDrinks(mappedDrinks);
    };

    getData();
  }, []);

  const resetDrinks = async () => {
    setDrinks(originalDrinks);
  };

  const mapDrinks = (data) => {
    let drinks = data.drinks.map((drink) => {
      return {
        id: drink.idDrink,
        title: drink.strDrink,
        category: drink.strCategory,
        src: drink.strDrinkThumb,
        description: drink.strInstructions,
      };
    });
    return drinks;
  };

  return (
    <div className="App">
      <header className="App-header">
        <TitleHeader />
      </header>
      <div className="search-container">
        <Search
          drinks={drinks}
          originalDrinks={originalDrinks}
          setDrinks={setDrinks}
          setOriginalDrinks={setOriginalDrinks}
          resetDrinks={resetDrinks}
          searchString={searchString}
          setSearchString={setSearchString}
        />
      </div>
      <div className="list-container">
        <Cards drinks={drinks} />
      </div>
    </div>
  );
}

export default App;
