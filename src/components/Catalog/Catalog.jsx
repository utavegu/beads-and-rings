import React, { useState } from 'react';
import s from './Catalog.module.css';
import CatalogOptions from './Options/CatalogOptions';
import CatalogProducts from './Products/CatalogProducts';
import productsData from '../../data/products.json';

export default function Catalog() {
  /* Данные хранятся в этом компоненте. И только состояние корзины глобально */
  /* ПРОПТАЙПС ДАВАЙ УЖЕ НАСТРАИВАЙ!!! КОМПОНЕНТЫ-ТО ПЛОДЯТСЯ!!!*/

    // 2) Фильтрация
    // 3) Отображение

  const [products, setProducts] = useState(productsData)

  const handleGetFilters = (filters) => {
    // Прогоняем в таком порядке, чейном:
    // сначала все фильтры... как вариант - можно проверять, что категория из даты есть в массиве... ну и соответственно наружу поднимать массив, надо исправить тогда
    // затем сортровка
    // затем одаём это в стейт с данными и их уже погружаем в каталог продуктс
    // что касается отображения - скорее всего это просто отдельный флаг, исходя из значения которого будет отрисовываться тот или иной компонент. Но имей в виду, что вариантов отрисовки может быть больше, чем 2, потому на булево тут лучше не особо рассчитывай

    // Вот тут надо будет словарь использовать! ring - кольцо, beards - изделие из бисера. И т.д.

    // Тут точно "леты" нужны в обоих случаях? Проверь консты, когда всё заработает

    // let convertedАilters = Object.assign({}, filters)
    // Так, стоп-стоп-стоп... у меня задача - перебрать объект и вытащить из него для начала те поля, где в ключах содержится category. Это для начала их надо перевести в строку... хотя они ж и так строка, вроде... Затем, применить к ним индекс оф. И из их значений создать массив
    // const TEST = convertedАilters.key;
    // const objKeys = Object.keys(obj);
    // const objValues = Object.values(obj);
    // const objEntries = Object.entries(obj);
    
    console.table(filters);

    // console.log(Object.entries(convertedАilters));
    // Хотя нафига, можно же вытащить с помощью подстроки (сейчас попробую отдельными объектами сделать) значения и если они тру - напихать их в массив. Потом уже пробегаться по нему и если хотя бы одно из них совпадает (после прогона через словарь) с типом данных из дата-файла - отрисовывать (ну как в примере фильтра ниже, только вместо хардкода - перебор значений-строк массива)


    let filtredProducts = productsData
      .slice()
      .filter(product => product.type === "Кольцо")
      /*
      РАБОЧАЯ УЖЕ, НЕ ТРОГАЙ! Ну, по крайней мере работало до того, как я структуру поменял
      .sort((a, b) => {
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
      */
    setProducts(filtredProducts);
  }

  return (
    <section className={s.catalog}>
      <h2 className="visually-hidden">Каталог</h2>
      <CatalogOptions onGetFilters={handleGetFilters} />
      <CatalogProducts items={products} />
    </section>
  )
}
