import React, { useContext } from 'react';
import s from './Cart.module.css';
import CartTable from './CartTable';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import OrderForm from './OrderForm';

export default function Cart() {
  const {cart, addToCart} = useContext(CartContext);
  const emptyCartStyle = {
    textAlign: "center",
    fontSize: "larger",
    margin: 0,
    padding: "100px",
  }

  return (
    
    <section className={s.cart}>
      <h2 className="visually-hidden">Корзина</h2>
      <section>
        {cart.length
        ?
        <CartTable cart={cart} addToCart={addToCart} />
        :
        <p style={emptyCartStyle}>В корзине пусто! Чтобы помочь корзине победить пустоту внутри - пригляди себе что-нибудь в <Link to="/" style={{color: "inherit", textDecoration: "underline"}}>каталоге</Link></p>}
      </section>
      {cart.length && <OrderForm cart={cart} addToCart={addToCart} />}
    </section>
  )
}
