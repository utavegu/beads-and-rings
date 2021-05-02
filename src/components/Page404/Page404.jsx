import React from 'react';
import { Link } from 'react-router-dom';
import s from './Page404.module.css';
import { useHistory } from 'react-router';

export default function Page404() {
  const history = useHistory();
  const goBackStyle = {
    cursor: "pointer",
    color: "inherit",
    border: "none",
    backgroundColor: "transparent",
    padding: 0,
    textDecoration: "underline",
  }
  return (
    <section className={s.page404}>
      <h2>Страница не найдена!</h2>
      <picture>
        <source media="(min-width: 768px)" srcSet="./img/crossroads.jpg" />
        <img src="./img/crossroads-mobile.jpg" alt="Фотография перепутья" />
      </picture>
      <p>Ты сбился с пути, странник! <br /> Вернись <button style={goBackStyle} onClick={() => {history.goBack()}}>назад</button> или в <Link to="/">начало пути</Link></p>
    </section>
  )
}
