import React from 'react';
import SwipeableTextMobileStepper from './Carousel';
import s from './Stocks.module.css';

export default function Stocks() {
  const data = [
    {
      label: 'При заказе от 3000 рублей доставка бесплатно',
      imgPath: 'http://placehold.it/320x255',
    },
    {
      label: 'Именинникам скидка 15%!',
      imgPath: 'http://placehold.it/320x255',
    },
    {
      label: 'Создаём изделия под заказ',
      imgPath: 'http://placehold.it/320x255',
    },
    {
      label: 'Программы лояльности для оптовиков и постоянных клиентов!',
      imgPath: 'http://placehold.it/320x255',
    },
  ];
  return (
    <section className={s.stocks}>
      <SwipeableTextMobileStepper slidesInfo={data} />
    </section>
  )
}
