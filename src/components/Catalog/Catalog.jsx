import React, { useState } from 'react';
import s from './Catalog.module.css';
import CatalogOptions from './Options/CatalogOptions';
import CatalogProducts from './Products/CatalogProducts';
import productsData from '../../data/products.json';

export default function Catalog() {
  /* 
  Данные хранятся в этом компоненте. И только состояние корзины глобально
  ПРОПТАЙПС ДАВАЙ УЖЕ НАСТРАИВАЙ!!! КОМПОНЕНТЫ-ТО ПЛОДЯТСЯ!!!
  И в компоненте пора порядок навести
  */
  // 3) Отображение

  const [products, setProducts] = useState(productsData)

  let allPrices = [];
  productsData.slice().forEach(product => allPrices.push(product.price));
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const handleGetFilters = (filters) => {
    // что касается отображения - скорее всего это просто отдельный флаг, исходя из значения которого будет отрисовываться тот или иной компонент. Но имей в виду, что вариантов отрисовки может быть больше, чем 2, потому на булево тут лучше не особо рассчитывай

    //СЛОВАРЬ (скорее всего в common.js пойдёт... кстати, создай его)
    const productTypeDict = {
      "rings": "Кольцо",
      "beads": "Изделие из бисера",
    };

    // Фильтрация по категориям
    let categories = [];
    for (let category in filters.category) {      
      if (filters.category[category]) categories.push(productTypeDict[category]);
    }
    
    const filtredProducts = productsData
      .slice()
      .filter(product => categories.includes(product.type))
      .filter(product => product.price >= filters.budget.min && product.price <= filters.budget.max)
      .sort((a, b) => { // Функцию сортировки бы тоже в common
        switch(filters.sort) {
          case 'name-ascending':
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            break;
          case 'name-descending':
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
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
    console.log(filters);
  }

  return (
    <section className={s.catalog}>
      <h2 className="visually-hidden">Каталог</h2>
      <CatalogOptions onGetFilters={handleGetFilters} minBudget={minPrice} maxBudget={maxPrice} />
      <CatalogProducts items={products} />
    </section>
  )
}
