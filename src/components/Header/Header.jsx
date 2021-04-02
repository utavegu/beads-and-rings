import React from 'react';

export default function Header() {
  return (
    <header className="main-header">
      <h1 className="visually-hidden">Интернет-магазин титановых колец и изделий из бисера</h1>
      <nav className="main-header__nav">
        <a href="#">
          <img src="" width="" height="" alt=""/>
        </a>
        <ul className="site-navigation">
          <li className="site-navigation__item">
            <a href="#">О нас</a>
          </li>
          <li className="site-navigation__item">
            <a href="#">Каталог</a>
          </li>
          <li className="site-navigation__item">
            <a href="#">Акции</a>
          </li>
        </ul>
      </nav>
      <a href="#">
        <span className="visually-hidden">Корзина</span>
      </a>
    </header>
  )
}

