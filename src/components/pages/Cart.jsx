import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../PizzaBlock/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { clearProduct } from '../../redux/slices/cartSlice';

// import {cartEmpty} from '../../assets/img/empty-cart.png'

export default function Cart() {

    const dispatch = useDispatch();
    const {totalPrice , items} = useSelector((state) => state.cartSlice);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0); 

    const onClickClear = () => { 
        dispatch(clearProduct());
    }

    return (
        <div className="container container--cart">
            {items.length !== 0 ? (
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Корзина
                        </h2>
                        <div onClick={onClickClear} className="cart__clear">
                            <span>Очистить корзину</span>
                        </div>
                    </div>
                    <div className="content__items">
                        {items.map((obj) => (
                            <CartItem key={obj.id} {...obj} />
                        ))}
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>Всего пицц: <b>{totalCount} шт.</b></span>
                            <span>Сумма заказа: <b>{totalPrice} ₽</b></span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link to="/" className="button button--outline button--add go-back-btn">
                                <span>Вернуться назад</span>
                            </Link>
                            <div className="button pay-btn">
                                <span>Оплатить сейчас</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="cart cart--empty">
                    <h2>Корзина пустая <span role="img" aria-label="sad">😕</span></h2>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу.<br />
                        Для того, чтобы заказать пиццу, перейдите на главную страницу.
                    </p>
                    <img src="" alt="Empty cart" />
                    <Link to="/" className="button button--black">
                        <span>Вернуться назад</span>
                    </Link>
                </div>
            )}
        </div>
    );
}
