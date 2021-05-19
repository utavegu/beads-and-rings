import React, { useState } from 'react';
import CatalogSearch from '../Search/CatalogSearch';
import s from './CatalogProducts.module.css';
import Button from '../../Button';
import ProductsList from './ProductsList';
import PropTypes from 'prop-types';

function CatalogProducts({items, view}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayStep, setDisplayStep] = useState(6);

  const displayedItems = items
    .slice()
    .filter(item => item.name.toLowerCase().indexOf(searchQuery.toLowerCase().trim()) > -1)
    .slice(0, displayStep);

  return (
    <section className={s.products}>
      <CatalogSearch queryString={searchQuery} setSearchQuery={setSearchQuery} />
      {(!!displayedItems.length) ? <ProductsList items={displayedItems} view={view} /> :
      <p style={{textAlign: "center", fontSize: "larger"}}>По данному запросу ничего не найдено!</p>}
      {!(displayStep - displayedItems.length) && <Button onClick={() => setDisplayStep(displayStep + 6)} type="button">Загрузить ещё</Button>}
    </section>
  )
}

CatalogProducts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  view: PropTypes.string,
};

export default CatalogProducts;
