import React from 'react';
import ProductCard from './ProductCard';
import s from './ProductsList.module.css';
import ProductString from './ProductString';
import PropTypes from 'prop-types';

function ProductsList({items, view}) {
  const changeDisplay = () => {
    switch (view) {
      case "cards":
        return items.map(item => <ProductCard item={item} key={item.id}/>);
      case "list":
        return items.map(item => <ProductString item={item} key={item.id}/>);
      default:
        console.log("Ошибка входных данных!");
    }
  }

  return (
    <ul className={s.products_list}>
      {changeDisplay()}
    </ul>
  )
}

ProductsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  view: PropTypes.string,
};

export default ProductsList;
