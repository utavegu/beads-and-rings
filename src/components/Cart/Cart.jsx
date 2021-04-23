import React from 'react';
import s from './Cart.module.css';

{/* ТАБЛИЦА ВСЯКО ОТДЕЛЬНЫЙ КОМПОНЕНТ! Чтобы была возможность её не отрисовывать, когда пусто в ней. */}
export default function Cart() {
  return (

    <section className={s.cart}>
      <h2 className="visually-hidden">Корзина</h2>
      <section>
        
        <table>
          <caption>Товары в корзине</caption>
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

      </section>

    {/*     
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
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
