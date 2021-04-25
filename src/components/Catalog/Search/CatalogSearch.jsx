import React from 'react';
import s from './CatalogSearch.module.css';

export default function CatalogSearch({queryString, setSearchQuery}) {
  
  const handleQuery = ({target}) => {
    setSearchQuery(target.value);
  }

  return (
    <section className={s.search}>
      <form>
        <label htmlFor="search-products" className="visually-hidden">Поиск</label>
        <input
          className={s.search_field}
          id="search-products"
          placeholder="Поиск"
          value={queryString}
          onChange={handleQuery}
        />
      </form>
    </section>
  )
}
