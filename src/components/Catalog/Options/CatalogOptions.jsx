import React from 'react';
import Button from '../../Button';
import s from './CatalogOptions.module.css'; // Хм... можно сам компонент не разбивать, а стили для него попробовать сделать разные
import RangeSlider from './RangeSlider.jsx';

export default function CatalogOptions() {
  return (
    <section className={s.options}>

      <form action="">

        <fieldset className={s.presentation}>
          <legend>Представление</legend>
          <ul>
            <li>
              <label>
                <input className="visually-hidden" type="radio" name="presentation" value="Карточки"/>
                <span className={`${s.custom_radio} ${s.list}`} title="Карточки"></span>
                <span className="visually-hidden">Карточки</span>
              </label>
            </li>
            <li>
              <label>
                <input className="visually-hidden" type="radio" name="presentation" value="Список"/>
                <span className={`${s.custom_radio} ${s.module}`} title="Список"></span>
                <span className="visually-hidden">Список</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className={s.category}>
          <legend>Категории товаров</legend>
          <ul>
            <li>
              <label>
                <input className="visually-hidden" type="checkbox" name="category" value="Кольца"/>
                <span className={s.custom_checkbox}></span>
                <span>Кольца</span>
              </label>
            </li>
            <li>
              <label>
                <input className="visually-hidden" type="checkbox" name="category" value="Изделия из бисера"/>
                <span className={s.custom_checkbox}></span>
                <span>Изделия из бисера</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className={s.budget}>
          <legend>Цена</legend>
          <RangeSlider />
          <input type="text" placeholder="от" pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"/>
          <input type="text" placeholder="до" pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])" style={{float: "right"}}/>
        </fieldset>

        <fieldset className={s.sort}>
          <legend>Сортировать по</legend>
          <ul>
            <li>
              <p>Названию</p>
              <div>
                <label>
                  <input className="visually-hidden" type="radio" name="sort" value="name-ascending"/>
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input className="visually-hidden" type="radio" name="sort" value="name-descending"/>
                  <span className={`${s.custom_arrow} ${s.descending}`} title="по убыванию"></span>
                  <span className="visually-hidden">Убыванию</span>
                </label>
              </div>
            </li>
            <li>
              <p>Цене</p>
              <div>
                <label>
                  <input className="visually-hidden" type="radio" name="sort" value="price-ascending"/>
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input className="visually-hidden" type="radio" name="sort" value="price-descending"/>
                  <span className={`${s.custom_arrow} ${s.descending}`} title="по убыванию"></span>
                  <span className="visually-hidden">Убыванию</span>
                </label>
              </div>
            </li>
          </ul>
        </fieldset>

        <Button type="submit">Применить фильтры</Button>

      </form>

    </section>
  )
}
