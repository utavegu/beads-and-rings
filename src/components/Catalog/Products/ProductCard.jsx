import React from 'react';
import { Link } from 'react-router-dom';
import s from './ProductCard.module.css';
import PropTypes from 'prop-types';

function ProductCard({item}) {
  return (
    <li className={item.isNew ? `${s.product_card} ${s.new}` : `${s.product_card}`}>
      <div className={s.card_presentation}>
        <img src={item.photo} alt={item.name} />
      </div>
      <div className={s.card_options}>
        <Link to={`/${item.id}`}>Посмотреть товар</Link>
      </div>
      <div>
        <h3 className={s.product_name}><Link to={`/${item.id}`}>{item.name}</Link></h3>
        <p>{item.price} &#8381;</p>
      </div>
    </li>
  )
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;
