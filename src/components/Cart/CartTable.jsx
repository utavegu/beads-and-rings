import React, { useState, useContext } from 'react';
import s from './CartTable.module.css';
import PropTypes from 'prop-types';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

function TableRow({item, orderNumber, onRemove: handleRemove, onAdd: handleAdd}) {
  return (
    <tr>
      <th scope="row" style={{border: "none"}}>{orderNumber + 1}</th>
      <td className={s.product_name}>
        <Link to={`/${item.id}`}>{item.name}</Link>
      </td>
      <td>{item.size}</td>
      <td>{item.quantity}</td>
      <td>{item.price} руб.</td>
      <td>{item.price * item.quantity} руб.</td>
      <td className={s.actions}>

        <button
          className={s.button_add}
          onClick={() => handleAdd(orderNumber)}
          title="Добавить"
        >
          <span className="visually-hidden">Добавить</span>
        </button>

        <button
          className={s.button_subtract}
          title="Убавить"
        >
          <span className="visually-hidden">Убавить</span>
        </button>

        <button
          className={s.button_remove}
          onClick={() => handleRemove(orderNumber)}
          title="Удалить позицию"
        >
          <span className="visually-hidden">Удалить позицию</span>
        </button>

      </td>
    </tr>
  )

  /* СЮДА ТОЖЕ ПРОПТАЙПСЫ */
}

function CartTable(props) {
  const {cart, addToCart} = useContext(CartContext);

  const total = cart
    .map(elem => elem.price * elem.quantity)
    .reduce((sum, elem) => sum + elem, 0);

  const handleClearCart = () => {
    addToCart([]);
  }

  const handleRemove = orderNumber => {
    addToCart(cart.filter((_, id) => id !== orderNumber));
  }

  const handleAdd = orderNumber => {
    let test = cart.find((_, id) => id === orderNumber);
    test.quantity += 1;
    addToCart(cart);
  }

  return (
    <table className={s.estimate}>
      <caption>Товары в корзине</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Цена</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colSpan="5" style={{textAlign: "right"}}>Общая стоимость:</td>
          <td>{total} руб.</td>
          <td>
            <button className={s.button_clear} onClick={handleClearCart} title="Очистить корзину">
              <span className="visually-hidden">Очистить корзину</span>
            </button>
          </td>
        </tr>
      </tfoot>
      <tbody>
        {cart.map((product, id) => <TableRow
          item={product}
          orderNumber={id}
          key={product.name + product.size}
          onRemove={handleRemove}
          onAdd={handleAdd}
        />)}
      </tbody>
    </table>
  )
}

CartTable.propTypes = {

}

export default CartTable

