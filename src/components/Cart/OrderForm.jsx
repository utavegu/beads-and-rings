import React from 'react';
import PropTypes from 'prop-types';
import s from './OrderForm.module.css';
import Button from '../Button'

const initialState = {
  name: '',
  phone: '',
  email: '',
  delivery_method: 'Курьер',
  payment_method: 'При получении',
}

function OrderForm({cart, addToCart}) {
  let [form, setForm] = React.useState(initialState);

  const handleChange = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const order = {
      form: form,
      cart: cart,
    } // вот этот товарищ, в идеале, улетает на сервер или на почту
    console.log(order);
    
    setForm(initialState);
    addToCart([]);
    alert("Спасибо, мы свяжемся с вами ближайшее время и обсудим детали получения заказа!"); // МОДАЛКА!
    // Пуш в каталог через хистори, через 3 секунды
  }
  
  return (
    <section className={s.order}>
      <h3>Оформить заказ</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="name">Как к вам обращаться?</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Мой господин"
            />
          </p>
          <p>
            <label htmlFor="phone">Телефон</label>
            <input
              onChange={handleChange}
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              placeholder="Ваш телефон"
              pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
              required
            />
          </p>
          <p>
            <label htmlFor="email">Почта</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="Почта"
              required
            />
          </p>

          <p>
            <label htmlFor="delivery_method">Способ доставки</label>
            <select
              value={form.delivery_method}
              name="delivery_method"
              id="delivery_method"
              onChange={handleChange}
            >
              <option value="Курьер" defaultValue>Курьер</option>
              <option value="Самовывоз">Самовывоз</option>
            </select>
          </p>
      
          <p>
            <label htmlFor="payment_method">Способ оплаты</label>
            <select
              value={form.payment_method}
              name="payment_method"
              id="payment_method"
              onChange={handleChange}
            >
              <option value="При получении">При получении</option>
              <option value="Картой банка">Картой банка</option>
              <option value="Электронные платёжные системы">Электронные платёжные системы</option>
            </select>
          </p>

          {/* ТУТ */}

          <p>
            {/* <Button type="reset">Сброс</Button> */}
            <Button type="submit">Оформить</Button>
          </p>
        </form>
    </section>
  )
}

OrderForm.propTypes = {

}

export default OrderForm

