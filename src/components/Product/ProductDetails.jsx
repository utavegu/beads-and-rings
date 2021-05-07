import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import s from './ProductDetails.module.css';
import Button from '../Button';
import { getCartData } from '../../common';
import CartContext from '../../contexts/CartContext'

function ProductDetails({product, history}) {

  const [selectedSize, setSelectedSize] = useState(null);
  const [amountThisSize, setAmountThisSize] = useState(null)
  const {addToCart} = useContext(CartContext);

  const totalExemplars = selectedSize && product.sizes.find(o => o.size === selectedSize).quantity;
  
  const handleChooseSize = (size) => {
    setSelectedSize(size);
    setAmountThisSize((product.sizes.find(o => o.size === size)).quantity);
  }

  const handleAddProduct = () => {
    const productList = getCartData();
    const productItem = {
      id: product.id,
      name: product.name,
      size: selectedSize,
      quantity: amountThisSize,
      price: product.price,
    }
    const sameProduct = productList.find(el => 
      el.id === productItem.id
      &&
      el.size === productItem.size
      &&
      el.price === productItem.price
    );
    if (sameProduct) {
      sameProduct.quantity += productItem.quantity;
      if (sameProduct.quantity > totalExemplars) sameProduct.quantity = totalExemplars;
    } else {
      productList.push(productItem);
    }
    addToCart(productList);
    history.push("/cart");
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
          <dt>Творец:</dt>
          <dd><a className={s.crafter} href={product.crafter.link} target="_blank" rel="noreferrer">{product.crafter.name}</a></dd>
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
          <dt>Размер<sup title="Чтобы узнать ваш размер, обмотайте нужный палец ниткой, затем линейкой замерьте полученную длину нитки в милиметрах">*</sup>:</dt>
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
              <button
                className={s.subtract}
                onClick={() => setAmountThisSize(amountThisSize - 1)}
                disabled={amountThisSize === 1}
                title="Убавить"
              >
                <span className="visually-hidden">Subtract</span>
              </button>
              <span>{amountThisSize}</span>
              <button
                className={s.add}
                onClick={() => setAmountThisSize(amountThisSize + 1)}
                disabled={amountThisSize === totalExemplars}
                title="Добавить"
              >
                <span className="visually-hidden">Add</span>
              </button>
            </div>
            :
            <span style={{color: "#fff"}}>Выберите размер</span>
            }
          </dd>
        </dl>
        <Button onClick={handleAddProduct} type="button" isDisabled={!selectedSize}>Добавить в корзину</Button>
      </div>
    </>
  )
}

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default ProductDetails

