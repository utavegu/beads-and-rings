import React from 'react';
import PropTypes from 'prop-types';
import s from './OrderForm.module.css';
import Button from '../Button'


function OrderForm(props) {
  /* Спасибо, мы свяжемся с вами ближайшее время и обсудим детали получения заказа - модалка */
  return (
    <section className={s.order}>
      <h3>Оформить заказ</h3>
        <form>
          <p>
            <label htmlFor="name">Как к вам обращаться?</label>
            <input type="text" id="name" placeholder="Мой господин" />
          </p>
          <p>
            <label htmlFor="phone">Телефон</label>
            <input type="tel" id="phone" placeholder="Ваш телефон" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"/>
          </p>
          <p>
            <label htmlFor="email">Почта</label>
            <input type="email" id="email" placeholder="Почта" />
          </p>
          <p>
            <label htmlFor="email">Способ доставки</label>
            <select name="day">
              <option value="courier" defaultValue>Курьер</option>
              <option value="pickup">Самовывоз</option>
            </select>
          </p>
          <p>
            <label htmlFor="email">Способ оплаты</label>
            <select name="day">
              <option value="courier" defaultValue>При получении</option>
              <option value="pickup">Картой банка</option>
              <option value="pickup">Электронные платёжные системы</option>
            </select>
          </p>
          <p>
            <Button type="reset">Сброс</Button>
            <Button type="submit">Оформить</Button>
          </p>
        </form>
    </section>
  )
}

OrderForm.propTypes = {

}

export default OrderForm

