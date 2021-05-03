import React from 'react';
import s from './CatalogSearch.module.css';
import PropTypes from 'prop-types';

function CatalogSearch({queryString, setSearchQuery}) {
  
  const handleQuery = ({target}) => {
    setSearchQuery(target.value);
  }

  return (
    <section className={s.search}>
      <form onSubmit={evt => evt.preventDefault()}>
        <label htmlFor="search-products" className="visually-hidden">Поиск</label>
        <input
          className={s.search_field}
          type="search"
          id="search-products"
          placeholder="Поиск"
          value={queryString}
          onChange={handleQuery}
        />
      </form>
    </section>
  )
}

CatalogSearch.propTypes = {
  queryString: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func,
};

export default CatalogSearch;
