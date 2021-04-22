import React from 'react';
import ProductCard from './ProductCard';
import s from './ProductsList.module.css';
import ProductString from './ProductString';


export default function ProductsList({items}) {
  return (
    <ul className={s.products_list}>
      {/* Вроде во второй ДЗ было о том, как правильно обрабатывать подобную ситуацию */}
      {items.map(item => <ProductCard item={item} key={item.id}/>)}
      {/* {items.map(item => <ProductString item={item} key={item.id}/>)} */}
    </ul>
  )
}
