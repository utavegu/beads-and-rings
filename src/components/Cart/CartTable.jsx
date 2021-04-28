import React from 'react';
import s from './CartTable.module.css';
import PropTypes from 'prop-types';

function CartTable(props) {
  return (
    <table className={s.estimate}>
      <caption className="visually-hidden">Товары в корзине</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Размер</th>
          <th scope="col">Кол-во</th>
          <th scope="col">Стоимость</th>
          <th scope="col">Итого</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colSpan="5">Общая стоимость</td>
          <td>22 000 руб.</td>
          <td>
            <button>Очистить корзину</button>
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><a href="/products/1.html">Модное кольцо</a></td>
          <td>XXL</td>
          <td>3</td>
          <td>2 000 руб.</td>
          <td>6 000 руб.</td>
          <td>
            <button>+</button>
            <button>-</button>
            <button>х</button>
          </td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td><a href="/products/1.html"> ЕЩЁ БОЛЕЕ Модное кольцо</a></td>
          <td>XXS</td>
          <td>2</td>
          <td>2 000 руб.</td>
          <td>4 000 руб.</td>
          <td><button>Удалить</button></td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td><a href="/products/1.html">МЕНЕЕ Модное кольцо</a></td>
          <td>M</td>
          <td>1</td>
          <td>2 000 руб.</td>
          <td>2 000 руб.</td>
          <td><button>Удалить</button></td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td><a href="/products/1.html">НЕ Модное кольцо</a></td>
          <td>S</td>
          <td>5</td>
          <td>2 000 руб.</td>
          <td>10 000 руб.</td>
          <td><button>Удалить</button></td>
        </tr>
      </tbody>
    </table>
  )
}

CartTable.propTypes = {

}

export default CartTable

