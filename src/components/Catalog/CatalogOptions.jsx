import React from 'react';
import s from './CatalogOptions.module.css';
import RangeSlider from './RangeSlider.jsx';

export default function CatalogOptions() {
  return (
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
                <input className="visually-hidden" type="checkbox" name="category" value="Кольца"/>
                <span></span>
                <span>Кольца</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="category" value="Изделия из бисера"/>
                <span></span>
                <span>Изделия из бисера</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className={s.budget}>
          <legend>Цена</legend>
          <RangeSlider />
          <input type="number" placeholder="от"/>
          <input type="number" placeholder="до" style={{float: "right"}}/>
        </fieldset>

        <fieldset>
          <legend>Сортировать по</legend>
          6 радиокнопок - Название (убывание/возрастание), Цена (убывание/возрастание), Вид товара (спорно, честно говоря)
        </fieldset>

        <button type="submit">Применить фильтры</button>

      </form>

    </section>
  )
}
