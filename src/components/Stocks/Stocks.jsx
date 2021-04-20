import React, { useState } from 'react';
import SwipeableTextMobileStepper from './Carousel';
import StockDetails from './StockDetails';
import s from './Stocks.module.css';
import stockData from '../../data/stock.json';

export default function Stocks() {
  const [targetStock, setTargetStock] = useState({
    label: 'Выберите акцию...',
    description: '...чтобы узнать подробности',
  });

  const handleChangeStock = (id) => {
    setTargetStock(stockData.find(stock => stock.id === id));
  }

  return (
    <section className={s.stocks}>
      <h2 className="visually-hidden">Акции</h2>
      <div className={s.promo_container}>
        <SwipeableTextMobileStepper stocksInfo={stockData} onChangeStock={handleChangeStock} />
        <StockDetails stock={targetStock} />
      </div>
    </section>
  )
}
