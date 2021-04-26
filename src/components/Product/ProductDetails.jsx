import React from 'react';
import PropTypes from 'prop-types';
import s from './ProductDetails.module.css';
import Button from '../Button';

function ProductDetails({product}) {

  const sizeChooserStyle = {
    display: "inline-block",
    marginRight: "10px",
    textDecoration: "underline",
  }

  return (
    <>
      <h2 className={s.product_heading}>{product.name}</h2>
      <div className={s.product_container}>
        <div className={s.product_photo}>
          <picture>
            <source media="(min-width: 1200px)" srcSet={product.photo} />
            <source media="(min-width: 768px)" srcSet={product.photo} />
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
          <dt>Вес:</dt>
          <dd>{product.weight} г.</dd>
          <dt>Материаы:</dt>
          <dd>{product.materials.join(", ")}</dd>
          <dt>Цвет:</dt>
          <dd>{product.color.join(", ")}</dd>
          <dt>Размер:</dt>
          <dd>{product.sizes.map(o => <div style={sizeChooserStyle}>{o.size}</div>)}</dd>
          <dt>Количество:</dt>
          <dd>{product.sizes[0].quantity}</dd>
        </dl>
        <Button type="button" isDisabled={true}>Добавить в корзину</Button>
      </div>
    </>
  )
}

ProductDetails.propTypes = {

}

export default ProductDetails

