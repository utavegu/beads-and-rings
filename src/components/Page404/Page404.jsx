import React from 'react';
import s from './Page404.module.css';

export default function Page404() {
  return (
    <section className={s.page404}>
      <h2>Страница не найдена!</h2>
      <picture>
        <source media="(min-width: 768px)" srcSet="./img/crossroads.jpg" />
        <img src="./img/crossroads-mobile.jpg" alt="Фотография перепутья" />
      </picture>
      <p>Ты сбился с пути, странник! <br /> Вернись <a href="#">назад</a> или в <a href="#">начало пути</a></p>
    </section>
  )
}
