import React from 'react';
import s from './StocksDetails.module.css';

export default function StockDetails({stock}) {
  return (
    <div className={s.details}>
      <h3>{stock.label}</h3>
      <p>{stock.description}</p>
    </div>
  )
}
