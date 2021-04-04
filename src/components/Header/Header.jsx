import React from 'react';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>

      <h1 className="visually-hidden">Интернет-магазин титановых колец и изделий из бисера</h1>
      <nav className={s.nav}>

        <a href="#">
          {/* Логотип адаптивный - 3 вида */}
          <img src="" width="100" height="100" alt="Логотип сайта"/>
        </a>

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

      <a href="#">
        КОРЗИНА
        <span className="visually-hidden">Корзина</span>
      </a>

    </header>
  )
}

