import React from 'react';
import s from './Catalog.module.css';
import ring from '../../img/ring.jpg';
import beads from '../../img/beads.jpg';

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
          <input placeholder="Поиск" />
        </form>
      </section>


      <section className={s.products}>
        <ul className={s.products_list}>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={ring} alt="Кольцо" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={beads} alt="Изделие из бисера" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img alt="Какая-нибудь картинка хрен-пойми какого размера" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={beads} alt="Изделие из бисера" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={ring} alt="Кольцо" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={ring} alt="Кольцо" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img src={beads} alt="Изделие из бисера" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

          <li className={s.product_card}>
            <a href="" title="Посмотреть товар">
              <img alt="Какая-нибудь картинка хрен-пойми какого размера" width="200" height="200"/>
            </a>
            <div>
              <h3>Название товара</h3>
              <p>Цена товара</p>
              <button type="button">Добавить в корзину</button>
            </div>
          </li>

        </ul>

        <button type="button">Загрузить ещё</button>

      </section>
    </section>
  )
}
