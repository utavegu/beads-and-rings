import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ProductDetails.module.css';
import Button from '../Button';

function ProductDetails({product}) {

  const [selectedSize, setSelectedSize] = useState(null);
  const [amountThisSize, setAmountThisSize] = useState(null)

  const handleChooseSize = (size) => {
    setSelectedSize(size);
    setAmountThisSize((product.sizes.find(o => o.size === size)).quantity);
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
          <dd>{product.sizes.map(o => 
            <span
              className={`${s.size_chooser} ${(o.size === selectedSize) && s.selected_size}`}
              onClick={() => handleChooseSize(o.size)}
              key={o.size}
            >
              {o.size}
            </span>)}
          </dd>
          <dt>Количество:</dt>
          <dd>
            {amountThisSize
            ?
            <div className={s.quantity_chooser}>
              {/* Тут надо будет замемозить maxQuantity(когда оно первый раз инициализируется), и блочить плюсик, если текущее значение равно макс квантити. И минусик - если единице. */}
              <button onClick={() => setAmountThisSize(amountThisSize - 1)} disabled={amountThisSize === 1}>-</button>
              <span>{amountThisSize}</span>
              <button onClick={() => setAmountThisSize(amountThisSize + 1)} disabled={amountThisSize === (product.sizes.find(o => o.size === selectedSize)).quantity}>+</button>
            </div>
            :
            <span style={{color: "#fff"}}>Выберите размер</span>
            }
          </dd>
        </dl>
        <Button type="button" isDisabled={!selectedSize}>Добавить в корзину</Button>
      </div>
    </>
  )
}

ProductDetails.propTypes = {

}

export default ProductDetails

