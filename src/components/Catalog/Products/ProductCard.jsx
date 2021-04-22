import React from 'react';
import Button from '../../Button';
import s from './ProductCard.module.css';

export default function ProductCard({item}) {
  return (
    <li className={item.isNew ? `${s.product_card} ${s.new}` : `${s.product_card}`}>
      <div className={s.card_presentation}>
        <img src={item.photo} alt={item.name} />
      </div>
      <div className={s.card_options}>
        <a href="#">Посмотреть товар</a>
        <Button type="button">Добавить в корзину</Button>
      </div>
      <div>
        <h3 className={s.product_name}>{item.name}</h3>
        <p>{item.price} &#8381;</p>
      </div>
    </li>
  )
}
