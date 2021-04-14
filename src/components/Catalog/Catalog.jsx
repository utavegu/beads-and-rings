import React from 'react';
import s from './Catalog.module.css';
import CatalogOptions from './CatalogOptions';
import CatalogProducts from './CatalogProducts';
import CatalogSearch from './CatalogSearch';

export default function Catalog() {
  /* Данные хранятся в этом компоненте. И только состояние корзины глобально */
  return (
    <section className={s.catalog}>
      <CatalogOptions />
      <CatalogProducts />
    </section>
  )
}
