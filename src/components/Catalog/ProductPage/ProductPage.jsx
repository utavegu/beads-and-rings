import React from 'react';
import s from './ProductPage.module.css';
import Button from '../../Button';
import productsData from '../../../data/products.json'

const findById = (products, id) => products.find(product => product.id === id);

export default function ProductPage({ match }) {
  const product = findById(productsData, Number(match.params.id));
  return (
    <section className={s.product_page}>
      <h2>{product.name}</h2>
      <div className={s.product_container}>
        <div className={s.product_photo}>
          <picture>
            {/* <source media="(min-width: 1200px)" srcSet={"http://placehold.it/800"} /> */}
            <source media="(min-width: 1200px)" srcSet={product.photo} />
            {/* <source media="(min-width: 768px)" srcSet="http://placehold.it/600" /> */}
            <source media="(min-width: 768px)" srcSet={product.photo} />
            {/* <img src="http://placehold.it/320" alt="Фотография товара"/> */}
            <img src={product.photo} alt="Фотография товара"/>
          </picture>
        </div>
        <dl>
          <dt>Описание:</dt>
          <dd>{product.description}</dd>
          <dt>Цена:</dt>
          <dd>{product.price} руб.</dd>
          <dt>Тип:</dt>
          <dd>{product.type}</dd>
          <dt>Размер:</dt>
          <dd>{product.sizes}</dd>
          <dt>Вес:</dt>
          <dd>{product.weight} г.</dd>
          <dt>Материаы:</dt>
          <dd>{product.materials}</dd>
          <dt>Цвет:</dt>
          <dd>{product.color}</dd>
        </dl>
        <Button type="button" isDisabled={true}>Добавить в корзину</Button>
      </div>
    </section>
  )
}
