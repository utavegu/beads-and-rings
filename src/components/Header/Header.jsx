import React from 'react';
import s from './Header.module.css';
import logo from '../../img/wizard-hat.png'

export default function Header() {
  return (
    <header className={s.header}>

      <h1 className="visually-hidden">Интернет-магазин титановых колец и изделий из бисера</h1>

      <a className={s.logo} href="#">
        {/* Логотип адаптивный - 3 вида */}
        <img src={logo} width="200" height="179" alt="Логотип сайта"/>
      </a>

      <nav className={s.nav}>
        <ul className={s.nav_list}>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">О нас</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Каталог</a>
          </li>
          <li className={s.nav_item}>
            <a className={s.nav_link} href="#">Акции</a>
          </li>
        </ul>
      </nav>

      <a className={s.shopping_cart} href="#">
        <span className="visually-hidden">Корзина</span>
      </a>

    </header>
  )
}

