import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Categories from "../PizzaBlock/Categories"
import Sort from "../PizzaBlock/Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import { searchContext } from '../../App';
import { setCategoryId } from '../../redux/slices/filterSlice';

export default function Home() {

  const categoryId = useSelector(state => state.filterSlice.categoryId);
  const pickout = useSelector(state => state.filterSlice.sortType);
  const dispatch = useDispatch();

  const [searchValue] = useContext(searchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const orderUrl = pickout.sortProperty.includes('-') ? 'asc' : 'desc';
  const categoryUrl = categoryId > 0 ? `category=${categoryId}` : '';
  const filter = pickout.sortProperty.replace('-', '');
  const filterValueUrl = searchValue ? `&search=${searchValue}` : '';

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  useEffect(() => {
    setIsLoading(true);
  
    const url = `https://67c9a2d4102d684575c2e4ae.mockapi.io/items?${categoryUrl}&sortBy=${filter}&order=${orderUrl}${filterValueUrl}`;
  
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Ошибка запроса: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setItems([]);
        setIsLoading(false);
      });
  
    window.scrollTo(0, 0);
  }, [pickout, searchValue, categoryId]);
  

  return (
    <div className="container">
    <div className="content__top">
            <Categories categoryId={categoryId} onClickCategory={onClickCategory}/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        ) : items.length > 0 ? (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        ) : (
          <h2 style={{ margin: '0 auto', color: '#777' }}>Пиццы не найдены 😕</h2>
        )}
      </div>
    </div>
  )
}
