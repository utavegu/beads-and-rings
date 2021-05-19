import React, { useState } from 'react';
import s from './Catalog.module.css';
import CatalogOptions from './Options/CatalogOptions';
import CatalogProducts from './Products/CatalogProducts';
import productsData from '../../data/products.json';
import { productTypeDict } from '../../common';

export default function Catalog() {
  const [products, setProducts] = useState(productsData);
  const [view, setView] = useState("cards");

  let allPrices = [];
  productsData.slice().forEach(product => allPrices.push(product.price));
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const handleGetFilters = (filters, budgetMin, budgetMax) => {
    let categories = [];
    for (let category in filters.category) {      
      if (filters.category[category]) categories.push(productTypeDict[category]);
    }
    const filtredProducts = productsData
      .slice()
      .filter(product => categories.includes(product.type))
      .filter(product => product.price >= budgetMin && product.price <= budgetMax)
      .sort((a, b) => {
        switch(filters.sort) {
          case 'name-ascending':
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          case 'name-descending':
            return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
          case 'price-ascending':
            return a.price - b.price;
          case 'price-descending':
            return b.price - a.price;
        }
      })
    setProducts(filtredProducts);
    setView(filters.view);
  }

  return (
    <section className={s.catalog}>
      <h2 className="visually-hidden">Каталог</h2>
      <CatalogOptions onGetFilters={handleGetFilters} minBudget={minPrice} maxBudget={maxPrice} />
      <CatalogProducts items={products} view={view}/>
    </section>
  )
}
