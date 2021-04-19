import React, { useState } from 'react';
import SwipeableTextMobileStepper from './Carousel';
import StockDetails from './StockDetails';
import s from './Stocks.module.css';

export default function Stocks() {
  const [targetStock, setTargetStock] = useState({
    label: 'Выберите акцию...',
    description: '...чтобы узнать подробности',
  });

  const data = [
    {
      id: 0,
      label: 'При заказе от 3000 рублей доставка бесплатно',
      imgPath: 'http://placehold.it/320x255',
      description: 'Бла-бла-бла, бла-бла-бла, бла-бла-бла про ДОСТАВКУ',
    },
    {
      id: 1,
      label: 'Именинникам скидка 15%!',
      imgPath: 'http://placehold.it/320x255',
      description: 'Бла-бла-бла, бла-бла-бла, бла-бла-бла про ДНИ РОЖДЕНИЯ',
    },
    {
      id: 2,
      label: 'Создаём изделия под заказ',
      imgPath: 'http://placehold.it/320x255',
      description: 'Бла-бла-бла, бла-бла-бла, бла-бла-бла про ЛЮБОЙ КАПРИЗ ЗА ВАШИ ДЕНЬГИ',
    },
    {
      id: 3,
      label: 'Программы лояльности для оптовиков и постоянных клиентов!',
      imgPath: 'http://placehold.it/320x255',
      description: 'Бла-бла-бла, бла-бла-бла, бла-бла-бла про ОПТОВИКОВ И ПОСТОЯННЫХ КЛИЕНТОВ',
    },
  ];

  const handleChangeStock = (id) => {
    setTargetStock(data.find(stock => stock.id === id));
  }

  return (
    <section className={s.stocks}>
      <h2 className="visually-hidden">Акции</h2>
      <div className={s.promo_container}>
        <SwipeableTextMobileStepper stocksInfo={data} onChangeStock={handleChangeStock} />
        <StockDetails stock={targetStock} />
      </div>
    </section>
  )
}
