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
            if ((navigator.userAgent.search(/Chrome/) > 0)) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            }
            if ((navigator.userAgent.search(/Firefox/) > 0)) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            }
            break;
          case 'name-descending':
            if ((navigator.userAgent.search(/Chrome/) > 0)) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            }
            if ((navigator.userAgent.search(/Firefox/) > 0)) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            }
            break;
          case 'price-ascending':
            return a.price-b.price;
          case 'price-descending':
            return b.price-a.price;
          default:
            console.log("Неправильные входные данные");
            break;
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
