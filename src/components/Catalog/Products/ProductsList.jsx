import React from 'react';
import s from './ProductsList.module.css';
import Button from '../../Button';

export default function ProductsList() {
  return (
    <ul className={s.products_list}>

      <li className={`${s.product_string} ${s.new}`}>
        <div className={s.string_presentation}>
          <img src="./img/ring.jpg" alt="Кольцо всемогущества" />
        </div>
        <h3>Кольцо всемогущества</h3>
        <p>1500 &#8381;</p>
        <a href="#" title="Посмотреть товар">
          <span className="visually-hidden">Посмотреть товар</span>
        </a>
        <button type="button" title="Добавить в корзину">
          <span className="visually-hidden">Добавить в корзину</span>
        </button>
      </li>

      <li className={`${s.product_string} ${s.new}`}>
        <div className={s.string_presentation}>
          <img src="./img/amulet2.jpg" alt="Набор амулетов из семьи оборотней, терроризировавших златолесье" />
        </div>
        <h3>Набор амулетов из семьи оборотней, терроризировавших златолесье</h3>
        <p>1500 &#8381;</p>
        <a href="#" title="Посмотреть товар">
          <span className="visually-hidden">Посмотреть товар</span>
        </a>
        <button type="button" title="Добавить в корзину">
          <span className="visually-hidden">Добавить в корзину</span>
        </button>
      </li>

      <li className={`${s.product_string} ${s.new}`}>
        <div className={s.string_presentation}>
          <img src="./img/ring.jpg" alt="Кольцо всемогущества" />
        </div>
        <h3>Кольцо всемогущества</h3>
        <p>1500 &#8381;</p>
        <a href="#" title="Посмотреть товар">
          <span className="visually-hidden">Посмотреть товар</span>
        </a>
        <button type="button" title="Добавить в корзину">
          <span className="visually-hidden">Добавить в корзину</span>
        </button>
      </li>

      {/* ------------------------------- */}

      <li className={`${s.product_card} ${s.new}`}>
        <div className={s.card_presentation}>
          <img src="./img/ring.jpg" alt="Кольцо всемогущества" />
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
          <img src="./img/beads.jpg" alt="Подвеска всевиденья" />
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
          <img src="./img/ring2.jpg" alt="Кольцо двух стихий" />
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
          <img src="./img/ring3.jpeg" alt="Серебрянный оберег" />
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
          <img src="./img/amulet.jpg" alt="Славянский рунический амулет" />
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
          <img src="./img/amulet2.jpg" alt="Набор амулетов из семьи оборотней, терроризировавших златолесье" />
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
          <img src="./img/ring3.jpg" alt="Кольцо из черепа Нер'Зула" />
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
          <img src="./img/tree.webp" alt="Бисерное Чардрево из Богорощи" />
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
          <img src="./img/fantasy.jpeg" alt="Фэнтэзийное кольцо" />
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
          <img src="./img/cat.jpeg" alt="Кися" />
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
          <img src="./img/dreamfish.jpg" alt="Ловец снов 'Ловец рыб'" />
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
          <img src="./img/butterfly.jpeg" alt="Бабочка из бисера" />
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
          <img src="./img/druid.jpeg" alt="Амулет друида" />
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
          <img src="./img/root.jpeg" alt="Чертополох" />
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
