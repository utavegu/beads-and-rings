import React from 'react';
import s from './StocksDetails.module.css';
import PropTypes from 'prop-types';

function StockDetails({stock}) {
  return (
    <div className={s.details}>
      <h3>{stock.label}</h3>
      <p>{stock.description}</p>
    </div>
  )
}

StockDetails.propTypes = {
  stock: PropTypes.object.isRequired,
}

export default StockDetails;
