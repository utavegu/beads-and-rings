import React from 'react';
import s from './ProductString.module.css';

export default function ProductString({item}) {
  return (
    <li className={item.isNew ? `${s.product_string} ${s.new}` : `${s.product_string}`}>
      <div className={s.string_presentation}>
        <img src={item.photo} alt={item.name} />
      </div>
      <h3>{item.name}</h3>
      <p>{item.price} &#8381;</p>
      <a href="#" title="Посмотреть товар">
        <span className="visually-hidden">Посмотреть товар</span>
      </a>
      <button type="button" title="Добавить в корзину">
        <span className="visually-hidden">Добавить в корзину</span>
      </button>
    </li>
  )
}
