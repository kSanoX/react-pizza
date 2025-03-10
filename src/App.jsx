import { useEffect, useState } from "react";
import "../scss/app.scss";
import Header from "./components/Header"
import Categories from "./components/Categories"
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://67c9a2d4102d684575c2e4ae.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err))
    }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock {...obj} key={obj.id} /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
