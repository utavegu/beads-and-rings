import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import s from './OrderForm.module.css';
import Button from '../Button';
import Modal from '../Modal';
import { useHistory } from 'react-router';

const initialState = {
  name: '',
  phone: '',
  email: '',
  delivery_method: 'Курьер',
  payment_method: 'При получении',
}

function OrderForm({cart, addToCart}) {
  let [form, setForm] = useState(initialState);
  const [modalActive, setModalActive] = useState(false);
  const [notValid, setNotValid] = useState(false)

  const history = useHistory();

  const handleChange = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const order = {
      form: form,
      cart: cart,
    }; // Вот этот товарищ, в идеале, улетает на сервер или на почту. Джейсон менять нельзя, ибо пока клиент не забрал товар - он на складе. И "базу данных" должен менять только сам владелец магазина (это памятка, чтобы я не забыл, почему так сделал). Реальную отправку реализую, когда решим с заказчиками, как они этого хотят.
    setModalActive(true);
    setTimeout(() => {
      setModalActive(false);
      setForm(initialState);
      addToCart([]);
      history.push('/');
    }, 3000);
  }

  const handleInvalid = () => {
    setNotValid(true);
    setTimeout(() => setNotValid(false), 1100);
  }
  
  return (
    <section className={s.order}>      
      <h3>Оформить заказ</h3>
        <form
          onSubmit={handleSubmit}
          onInvalid={handleInvalid}
          className={notValid ? `${s.not_valid}` : ''}
        >
          <p>
            <label htmlFor="name">Как к вам обращаться?</label>
            <input
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Имя"
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
              placeholder="Адрес электронной почты"
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

          <p>
            {/* <Button type="reset">Сброс</Button> */}
            <Button type="submit">Оформить</Button>
          </p>
        </form>
        <Modal active={modalActive} setActive={setModalActive}>
          <p>Ваш заказ отправлен! Мы свяжемся с вами ближайшее время и обсудим детали получения заказа.</p>
        </Modal>
    </section>
  )
}

OrderForm.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: func.isRequired,
}

export default OrderForm

