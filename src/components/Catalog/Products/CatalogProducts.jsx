import React from 'react';
import CatalogSearch from '../Search/CatalogSearch';
import s from './CatalogProducts.module.css';
import Button from '../../Button';
import ProductsList from './ProductsList';

export default function CatalogProducts() {
  return (
    <section className={s.products}>
      <CatalogSearch />
      <ProductsList />
      <Button type="button">Загрузить ещё</Button>
    </section>
  )
}
