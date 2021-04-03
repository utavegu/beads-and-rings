import React from 'react';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="container bg-light footer">

			<section>
				<h5>Навигация</h5>
				<ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link">О нас</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Каталог</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Акции</a>
          </li>
				</ul>
			</section>

      <section className="footer-contacts">
        <h5>Контакты:</h5>
        <a className="footer-contacts-phone" href="tel:+7-123-456-89-01">+7-123-456-89-01</a>
        <span className="footer-contacts-working-hours">Ежедневно: с 09-00 до 18-00</span>
        <a className="footer-contacts-email" href="mailto:testmail@mail.ru">testmail@mail.ru</a>
        <div className={s.social_links}>
          <div className={`${s.social_link} ${s.social_link__twitter}`}></div>
          <div className={`${s.social_link} ${s.social_link__vk}`}></div>
        </div>
      </section>

      <section>
        <h5>Принимаем к оплате:</h5>
        <div className={s.pay}>
          <div className={`${s.pay_systems} ${s.pay_systems__paypal}`}></div>
          <div className={`${s.pay_systems} ${s.pay_systems__mastercard}`}></div>
          <div className={`${s.pay_systems} ${s.pay_systems__visa}`}></div>
          <div className={`${s.pay_systems} ${s.pay_systems__yandex}`}></div>
          <div className={`${s.pay_systems} ${s.pay_systems__webmoney}`}></div>
          <div className={`${s.pay_systems} ${s.pay_systems__qiwi}`}></div>
        </div>
      </section>

      <section>
        <p className="footer-copyright">Текст копирайта (мнемоника копирайта)</p>
      </section>

    </footer>
  )
}
