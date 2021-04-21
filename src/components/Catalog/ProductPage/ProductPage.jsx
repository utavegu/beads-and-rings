import React from 'react';
import s from './ProductPage.module.css';
import Button from '../../Button';

export default function ProductPage() {
  return (
    <section className={s.product_page}>
      <h2>Название товара</h2>
      <div className={s.product_container}>
        <div className={s.product_photo}>
          <picture>
            <source media="(min-width: 1200px)" srcSet="http://placehold.it/800" />
            <source media="(min-width: 768px)" srcSet="http://placehold.it/600" />
            <img src="http://placehold.it/320" alt="Фотография товара"/>
          </picture>
        </div>
        <dl>
          <dt>Цена:</dt>
          <dd>1200 рублей</dd>
          <dt>Материаы:</dt>
          <dd>Титан, изумруды и рубин</dd>
          <dt>Вес:</dt>
          <dd>200 граммов</dd>
          <dt>Размер:</dt>
          <dd>[S, M, L, XL]</dd>
        </dl>
        <Button type="button" isDisabled={true}>Добавить в корзину</Button>
      </div>
    </section>
  )
}
