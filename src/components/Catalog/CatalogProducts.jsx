import React from 'react';
import ring from '../../img/ring.jpg';
import beads from '../../img/beads.jpg';
import ring2 from '../../img/ring2.jpg';
import amulet from '../../img/amulet.jpg';
import ring3 from '../../img/ring3.jpeg';
import amulet2 from '../../img/amulet2.jpg';
import ring4 from '../../img/ring3.jpg';
import beads2 from '../../img/tree.webp';
import s from './CatalogProducts.module.css';
import Button from '../Button';

export default function CatalogProducts() {
  return (
    <section className={s.products}>
     
      <ul className={s.products_list}>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={ring} alt="Кольцо всемогущества" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3>Кольцо всемогущества</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={beads} alt="Подвеска всевиденья" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3>Подвеска всевиденья</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={ring2} alt="Кольцо двух стихий" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3>Кольцо двух стихий</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={ring3} alt="Серебрянный оберег" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3>Серебрянный оберег</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={amulet} alt="Славянский рунический амулет" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3>Славянский рунический амулет</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={amulet2} alt="Набор амулетов из семьи оборотней, терроризировавших златолесье" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3 className={s.product_name}>Набор амулетов из семьи оборотней, терроризировавших златолесье</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={ring4} alt="Набор амулетов из семьи оборотней, терроризировавших златолесье" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3 className={s.product_name}>Кольцо из черепа Нер'Зула</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

        <li className={s.product_card}>
          <div className={s.card_presentation}>
            <img src={beads2} alt="Набор амулетов из семьи оборотней, терроризировавших златолесье" />
          </div>
          <div className={s.card_options}>
            <a href="#">Посмотреть товар</a>
            <Button type="button">Добавить в корзину</Button>
          </div>
          <div>
            <h3 className={s.product_name}>Бисерное Чардрево из Богорощи</h3>
            <p>500 &#8381;</p>
          </div>
        </li>

      </ul>

      <Button type="button">Загрузить ещё</Button>

    </section>
  )
}
