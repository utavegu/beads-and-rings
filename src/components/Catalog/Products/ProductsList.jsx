import React from 'react';
import s from './ProductsList.module.css';
import Button from '../../Button';

import ring from '../../../img/content/ring.jpg';
import beads from '../../../img/content/beads.jpg';
import ring2 from '../../../img/content/ring2.jpg';
import amulet from '../../../img/content/amulet.jpg';
import ring3 from '../../../img/content/ring3.jpeg';
import amulet2 from '../../../img/content/amulet2.jpg';
import ring4 from '../../../img/content/ring3.jpg';
import beads2 from '../../../img/content/tree.webp';
import fantasy from '../../../img/content/fantasy.jpeg';
import cat from '../../../img/content/cat.jpeg';
import dreamfish from '../../../img/content/dreamfish.jpg';
import butterfly from '../../../img/content/butterfly.jpeg';
import druid from '../../../img/content/druid.jpeg';
import root from '../../../img/content/root.jpeg';

export default function ProductsList() {
  return (
    <ul className={s.products_list}>

      <li className={`${s.product_card} ${s.new}`}>
        <div className={s.card_presentation}>
          <img src={ring} alt="Кольцо всемогущества" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3>Кольцо всемогущества</h3>
          <p>1500 &#8381;</p>
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
          <p>800 &#8381;</p>
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
          <p>1100 &#8381;</p>
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
          <p>999 &#8381;</p>
        </div>
      </li>

      <li className={`${s.product_card} ${s.new}`}>
        <div className={s.card_presentation}>
          <img src={amulet} alt="Славянский рунический амулет" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3>Славянский рунический амулет</h3>
          <p>550 &#8381;</p>
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
          <p>3200 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={ring4} alt="Кольцо из черепа Нер'Зула" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Кольцо из черепа Нер'Зула</h3>
          <p>2400 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={beads2} alt="Бисерное Чардрево из Богорощи" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Бисерное Чардрево из Богорощи</h3>
          <p>890 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={fantasy} alt="Фэнтэзийное кольцо" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Фэнтэзийное кольцо</h3>
          <p>5700 &#8381;</p>
        </div>
      </li>

      <li className={`${s.product_card} ${s.new}`}>
        <div className={s.card_presentation}>
          <img src={cat} alt="Кися" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Кися</h3>
          <p>Бесценна</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={dreamfish} alt="Ловец снов 'Ловец рыб'" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Ловец снов "Ловец рыб"</h3>
          <p>1200 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={butterfly} alt="Бабочка из бисера" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Бабочка из бисера</h3>
          <p>830 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={druid} alt="Амулет друида" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Амулет друида</h3>
          <p>1000 &#8381;</p>
        </div>
      </li>

      <li className={s.product_card}>
        <div className={s.card_presentation}>
          <img src={root} alt="Чертополох" />
        </div>
        <div className={s.card_options}>
          <a href="#">Посмотреть товар</a>
          <Button type="button">Добавить в корзину</Button>
        </div>
        <div>
          <h3 className={s.product_name}>Зачарованный чертополох</h3>
          <p>1200 &#8381;</p>
        </div>
      </li>

    </ul>
  )
}
