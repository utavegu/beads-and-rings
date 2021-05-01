import React, { useContext } from 'react';
import s from './Cart.module.css';
import CartTable from './CartTable';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

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

    {/*     
    <section className="order">
      <h3 className="text-center">Оформить заказ</h3>
      нужен ли вообще? ну в целом не помешает
      <div className="card" 
      // style="max-width: 30rem; margin: 0 auto;"
      >
        <form className="card-body">
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input className="form-control" id="phone" placeholder="Ваш телефон" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input className="form-control" id="address" placeholder="Адрес доставки" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="agreement" />
            <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
          </div>
          <button type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>
      </div>
    </section>
    */}

    </section>
  )
}
