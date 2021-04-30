import React, { useContext } from 'react';
import s from './CartTable.module.css';
import PropTypes from 'prop-types';
import CartContext from '../../contexts/CartContext'

function CartTable(props) {
  const {cart} = useContext(CartContext);
  console.log(cart);

  /*
  "Очистить корзину" сразу реализуй, чтобы каждый раз не париться с очисткой истории браузера
  И оберни в линки названия товара
  */

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
          <td>22 000 руб.</td>
          <td>
            <button className={s.button_clear} title="Очистить корзину" style={{width: "100%"}}>
              <span className="visually-hidden">Очистить корзину</span>
            </button>
          </td>
        </tr>
      </tfoot>
      <tbody>

        <tr>
          <th scope="row" style={{border: "none"}}>1</th>
          <td className={s.product_name}>Модное дофига кольцо</td>
          <td>23.5</td>
          <td>3</td>
          <td>2 000 руб.</td>
          <td>6 000 руб.</td>
          <td className={s.actions}>
            <button className={s.button_add} title="Добавить">
              <span className="visually-hidden">Добавить</span>
            </button>
            <button className={s.button_subtract} title="Убавить">
              <span className="visually-hidden">Убавить</span>
            </button>
            <button className={s.button_remove} title="Удалить позицию">
              <span className="visually-hidden">Удалить позицию</span>
            </button>
          </td>
        </tr>

      </tbody>
    </table>
  )
}

CartTable.propTypes = {

}

export default CartTable

