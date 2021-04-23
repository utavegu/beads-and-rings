import React from 'react';
import s from './Catalog.module.css';
import CatalogOptions from './Options/CatalogOptions';
import CatalogProducts from './Products/CatalogProducts';
import productsData from '../../data/products.json';

export default function Catalog() {
  /* Данные хранятся в этом компоненте. И только состояние корзины глобально */
  /* ПРОПТАЙПС ДАВАЙ УЖЕ НАСТРАИВАЙ!!! КОМПОНЕНТЫ-ТО ПЛОДЯТСЯ!!!*/

    // 1) Сортировка  
    // 2) Фильтрация
    // 3) Отображение

  const handleGetFilters = (filters) => {
    console.log(filters);
    // productsData

  }

  return (
    <section className={s.catalog}>
      <h2 className="visually-hidden">Каталог</h2>
      <CatalogOptions onGetFilters={handleGetFilters} />
      <CatalogProducts items={productsData} />
    </section>
  )
}
