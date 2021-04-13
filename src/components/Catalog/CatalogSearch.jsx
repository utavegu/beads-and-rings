import React from 'react';
import s from './CatalogSearch.module.css';

export default function CatalogSearch() {
  return (
    <section className={s.search}>
      <form>
        <input className={s.search_field} placeholder="Поиск" />
      </form>
    </section>
  )
}
