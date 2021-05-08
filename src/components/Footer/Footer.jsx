import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>

        <section className={s.navigation}>
          <h2 className="visually-hidden">Навигация</h2>
          <ul className={s.nav_list}>
            <li className={s.nav_item}>
              <NavLink to="/about" className={s.nav_link} activeClassName={s.active_item}>О нас</NavLink>
            </li>
            <li className={s.nav_item}>
              <NavLink to="/" className={s.nav_link} activeClassName={s.active_item} exact>Каталог</NavLink>
            </li>
            <li className={s.nav_item}>
              <NavLink to="/stocks" className={s.nav_link} activeClassName={s.active_item}>Акции</NavLink>
            </li>
            <li className={`${s.nav_item} ${s.not_mobile} `}>
              <NavLink to="/cart" className={s.nav_link} activeClassName={s.active_item}>Корзина</NavLink>
            </li>
          </ul>
        </section>

        <section className={s.contacts}>
          <h2 className="visually-hidden">Контакты:</h2>

          <p><a href="tel:+7-123-456-89-01">8 923 456 89 01</a></p>

          <ul className={s.social_list}>
						<li>
							<a className={`${s.social_item} ${s.social_item__vk}`} href="https://vk.com/ekaterina_bebik" title="Вконтакте" target="_blank" rel="noreferrer">
								<span className="visually-hidden">Вконтакте</span>
							</a>
						</li>
						<li>
							<a className={`${s.social_item} ${s.social_item__fb}`} href="https://www.facebook.com/" title="Фейсбук" target="_blank" rel="noreferrer">
								<span className="visually-hidden">Фэйсбук</span>
							</a>
						</li>
						<li>
							<a className={`${s.social_item} ${s.social_item__inst}`} href="https://www.instagram.com/bebik_art" title="Инстаграм" target="_blank" rel="noreferrer">
								<span className="visually-hidden">Инстаграм</span>
							</a>
						</li>
					</ul>
          
          <p><a href="mailto:testmail@mail.ru">testmail@mail.ru</a></p>
        </section>

        <section className={s.payment_ways}>
          <h2 className={s.payment_header}>Принимаем к оплате:</h2>
          <div className={s.pay}>
            <div className={`${s.pay_systems} ${s.pay_systems__paypal}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__mastercard}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__visa}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__yandex}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__webmoney}`}></div>
            <div className={`${s.pay_systems} ${s.pay_systems__qiwi}`}></div>
          </div>
        </section>

        <section className={s.copyright}>
          <p>&laquo;Бисер и кольца 2021 &copy;&raquo;</p>
        </section>

    </footer>
  )
}
