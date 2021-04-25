import React, { useState } from 'react';
import CatalogSearch from '../Search/CatalogSearch';
import s from './CatalogProducts.module.css';
import Button from '../../Button';
import ProductsList from './ProductsList';

export default function CatalogProducts({items, view}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayStep, setDisplayStep] = useState(6);

  const displayedItems = items
    .slice()
    .filter(item => item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1)
    .slice(0, displayStep);

  return (
    <section className={s.products}>
      <CatalogSearch queryString={searchQuery} setSearchQuery={setSearchQuery} />
      <ProductsList items={displayedItems} view={view} />
      {!(displayStep - displayedItems.length) && <Button onClick={() => setDisplayStep(displayStep + 6)} type="button">Загрузить ещё</Button>}
    </section>
  )
}
