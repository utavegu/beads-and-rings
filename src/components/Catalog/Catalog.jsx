import React from 'react';
import s from './Catalog.module.css';
import ring from '../../img/ring.jpg';
import beads from '../../img/beads.jpg';
import ring2 from '../../img/ring2.jpg';
import amulet from '../../img/amulet.jpg';
import ring3 from '../../img/ring3.jpeg';
import amulet2 from '../../img/amulet2.jpg';
import ring4 from '../../img/ring3.jpg';
import beads2 from '../../img/tree.webp';

export default function Catalog() {
  /* Данные хранятся в этом компоненте. И только состояние корзины глобально */
  return (
    <section className={s.catalog}>
      <section className={s.options}>
        <form action="">

          <fieldset>
            <legend>Представление</legend>
            <ul>
              <li>
                <label>
                  <input type="radio" name="presentation" value="Плитка"/>
                  <span>Плитка</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="presentation" value="Список"/>
                  <span>Список</span>
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Категории товаров</legend>
            <ul>
              <li>
                <label>
                  <input type="checkbox" name="category" value="Кольца"/>
                  <span>Кольца</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="category" value="Изделия из бисера"/>
                  <span>Изделия из бисера</span>
                </label>
              </li>
            </ul>
          </fieldset>

          <fieldset>
            <legend>Цена</legend>
            Бегунок с двумя таскалками - от минимальной, до максимальной
            Вероятно, также, 2 числовых окошка для поля ввода тех же значений.
            И они связаны.
          </fieldset>

          <fieldset>
            <legend>Сортировать по</legend>
            6 радиокнопок - Название (убывание/возрастание), Цена (убывание/возрастание), Вид товара (спорно, честно говоря)
          </fieldset>

        </form>
      </section>


      <section className={s.search}>
        <form>
          <input className={s.search_field} placeholder="Поиск" />
        </form>
      </section>


      <section className={s.products}>
        <ul className={s.products_list}>

          <li className={s.product_card}>
            <div className={s.card_presentation}>
              <img src={ring} alt="Кольцо всемогущества" />
            </div>
            <div className={s.card_options}>
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
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
              <a href="#">Посмотреть товар"</a>
              <button type="button">Добавить в корзину</button>
            </div>
            <div>
              <h3 className={s.product_name}>Бисерное Чардрево из Богорощи</h3>
              <p>500 &#8381;</p>
            </div>
          </li>


        </ul>

        <button className={s.load_more} type="button">Загрузить ещё</button>

      </section>
    </section>
  )
}
