import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../img/wizard-hat.png';
import CartContext from '../../contexts/CartContext'

export default function Header() {
  const {cart} = useContext(CartContext);

  const quantityInCart = cart
    .map(elem => elem.quantity)
    .reduce((sum, elem) => sum + elem, 0);

  return (
    <header className={s.header}>

      <h1 className="visually-hidden">Интернет-магазин титановых колец и изделий из бисера</h1>

      <Link to="/" className={s.logo} exact>
        {/* Логотип адаптивный - 3 вида... Впрочем, надо ли? */}
        <img src={logo} width="200" height="179" alt="Логотип сайта"/>
      </Link>

      <nav className={s.nav}>
        <ul className={s.nav_list}>
          <li className={s.nav_item}>
            <NavLink to="/" className={s.nav_link} activeClassName={s.active_item} exact>Каталог</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/about" className={s.nav_link} activeClassName={s.active_item}>О нас</NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink to="/stocks" className={s.nav_link} activeClassName={s.active_item}>Акции</NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className={s.shopping_cart} title="Корзина">
        <div className={s.count_indicator}>
          <span>{quantityInCart}</span>
        </div>
        <span className="visually-hidden">Корзина</span>
      </Link>

    </header>
  )
}

