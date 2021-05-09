import React from 'react';
import s from './CartTable.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';

function TableRow({item, orderNumber, onRemove: handleRemove, onChangeQuantity: handleChangeQuantity}) {
  return (
    <tr>
      <th scope="row" style={{border: "none"}}>{orderNumber + 1}</th>
      <td className={s.product_name}>
        <Link to={`/${item.id}`}>{item.name}</Link>
      </td>
      <td>{item.size}</td>
      <td>{item.quantity}</td>
      <td>{item.price} руб.</td>
      <td className={s.col_sum}>{item.price * item.quantity} руб.</td>
      <td className={s.actions}>

        <button
          className={s.button_add}
          onClick={(evt) => handleChangeQuantity(evt, orderNumber)}
          title="Добавить"
        >
          <span className="visually-hidden">Добавить</span>
        </button>

        <button
          className={s.button_subtract}
          onClick={(evt) => handleChangeQuantity(evt, orderNumber)}
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
}

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  orderNumber: PropTypes.number,
  onRemove: PropTypes.func,
  onChangeQuantity: PropTypes.func,
}

function CartTable({cart, addToCart}) {
  const total = cart
    .map(elem => elem.price * elem.quantity)
    .reduce((sum, elem) => sum + elem, 0);

  const handleClearCart = () => {
    addToCart([]);
  }

  const handleRemove = orderNumber => {
    addToCart(cart.filter((_, id) => id !== orderNumber));
  }

  const handleChangeQuantity = ({target}, orderNumber) => {
    const newCart = cart.slice();
    const targetPosition = newCart.find((_, id) => id === orderNumber);
    // Не самое изящное решение на случай мультиязычного интерфейса, подумай как лучше... вот если бы там был плюс... Но я хз на сколько это семантично и доступно
    (target.title === "Добавить") ? targetPosition.quantity += 1 : targetPosition.quantity -= 1;
    const totalExemplars = productsData[targetPosition.id].sizes.find(o => o.size === targetPosition.size).quantity;
    if (targetPosition.quantity > totalExemplars) targetPosition.quantity = totalExemplars;
    if (targetPosition.quantity < 1) targetPosition.quantity = 1;
    addToCart(newCart);
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
            <button className={s.button_clear} onClick={handleClearCart} title="Очистить корзину" tabIndex="0">
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
          onChangeQuantity={handleChangeQuantity}
          quantity={product.quantity}
        />)}
      </tbody>
    </table>
  )
}

CartTable.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default CartTable
