import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Categories from "../PizzaBlock/Categories"
import Sort from "../PizzaBlock/Sort";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import { searchContext } from '../../App';
import { setCategoryId } from '../../redux/slices/filterSlice';

export default function Home() {

  const { categoryId, sortType: pickout } = useSelector(state => state.filterSlice);
  const dispatch = useDispatch();

  const [searchValue] = useContext(searchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const orderUrl = pickout.sortProperty.includes('-') ? 'asc' : 'desc';
  const categoryUrl = categoryId > 0 ? `category=${categoryId}` : '';
  const filter = pickout.sortProperty.replace('-', '');
  const filterValueUrl = searchValue ? `&search=${searchValue}` : '';

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

      const url = `https://67c9a2d4102d684575c2e4ae.mockapi.io/items?${categoryUrl}&sortBy=${filter}&order=${orderUrl}${filterValueUrl}`;

      axios.get(url)
        .then((res) => {
          if (res.data.length === 0) {
            setIsError(true);
          } else {
            setItems(res.data);
            setIsError(false);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Ошибка запроса:', err);
          setItems([]);
          setIsError(true);
          setIsLoading(false);
        });

      window.scrollTo(0, 0);

  }, [pickout, searchValue, categoryId]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoading && (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        )}

        {!isLoading && isError && (
          <h2 style={{ margin: '0 auto', color: '#777' }}>Пиццы не найдены 😕</h2>
        )}

        {!isLoading && !isError && items.length > 0 && (
          items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
    </div>
  );
}
