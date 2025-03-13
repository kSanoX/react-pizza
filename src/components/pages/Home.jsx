import React from 'react';
import { useEffect, useState } from "react";

import Categories from "../PizzaBlock/Categories"
import Sort from "../PizzaBlock/Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";

export default function Home() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [changeActive, setChangeActive] = React.useState(1);
  const [pickout, setPickout] = useState({
    name: 'популярности',
    sortProperty: "rating"
  });
  console.log(pickout, changeActive);

    useEffect(() => {
      setIsLoading(true);
      fetch(`https://67c9a2d4102d684575c2e4ae.mockapi.io/items?${changeActive > 0 ? `category=${changeActive}` : ''}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
      window.scrollTo(0,0);
    }, [changeActive, pickout]);

  return (
    <div className="container">
    <div className="content__top">
            <Categories changeActive={changeActive} onClickCategory={(i)=> setChangeActive(i)}/>
            <Sort pickout={pickout} onClickPickout={(i) => setPickout(i)}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
             {
              isLoading
              ? [...new Array(6)].map((_, i) => (
                <Skeleton key={i} />
              ))
              : items.map((obj) => (
                <PizzaBlock key={obj.id} {...obj} />
              ))
             }
          </div>
      </div>
  )
}
