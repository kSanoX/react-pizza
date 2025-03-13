import React from 'react';
import { useEffect, useState } from "react";

import Categories from "../PizzaBlock/Categories"
import Sort from "../PizzaBlock/Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";

export default function Home() {

    const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch("https://67c9a2d4102d684575c2e4ae.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
    }, []);

  return (
    <>
    <div className="content__top">
            <Categories />
            <Sort />
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
    </>
  )
}
