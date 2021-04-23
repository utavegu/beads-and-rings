import React, {useState} from 'react';
import Button from '../../Button';
import s from './CatalogOptions.module.css';
import RangeSlider from './RangeSlider.jsx';

export default function CatalogOptions({onGetFilters: handleGetFilters}) {

  const [filters, setFilters] = useState({
    view: "cards",
    categoryRings: true,
    categoryBeads: true,
    budgetMin: '',
    budgetMax: '',
    sort: "name-ascending",
  })

  const handleChangeInput = ({target}) => {
    const name = target.name;
    let value;
    switch(target.type) {
      case 'checkbox':
        value = target.checked;
        break;
      case 'radio':
        value = target.id;
        break;
      default:
        value = target.value;
        break;
    }
    setFilters(prev => ({...prev, [name]: value}));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    handleGetFilters(filters);
  }

  return (
    <section className={s.options}>

      <form onSubmit={handleSubmit}>

        <fieldset className={s.presentation}>
          <legend>Представление</legend>
          <ul>
            <li>
              <label>
                <input
                  className="visually-hidden"
                  type="radio"
                  name="view"
                  id="cards"
                  checked={filters.view === "cards"}
                  onChange={handleChangeInput}
                />
                <span className={`${s.custom_radio} ${s.list}`} title="Карточки"></span>
                <span className="visually-hidden">Карточки</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  className="visually-hidden"
                  type="radio"
                  name="view"
                  id="list"
                  checked={filters.view === "list"}
                  onChange={handleChangeInput} 
                />
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
                <input 
                  className="visually-hidden"
                  type="checkbox"
                  name="categoryRings"
                  checked={filters.categoryRings}
                  onChange={handleChangeInput}
                />
                <span className={s.custom_checkbox}></span>
                <span>Кольца</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  className="visually-hidden"
                  type="checkbox"
                  name="categoryBeads"
                  checked={filters.categoryBeads}
                  onChange={handleChangeInput}
                />
                <span className={s.custom_checkbox}></span>
                <span>Изделия из бисера</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className={s.budget}>
          <legend>Цена</legend>

          {/* 
          <RangeSlider />
           */}

          <input
            type="text"
            placeholder="от"
            pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"
            name="budgetMin"
            value={filters.budgetMin}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="до"
            pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"
            style={{float: "right"}}
            name="budgetMax"
            value={filters.budgetMax}
            onChange={handleChangeInput}
          />
        </fieldset>

        <fieldset className={s.sort}>
          <legend>Сортировать по</legend>
          <ul>
            <li>
              <p>Названию</p>
              <div>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="sort"
                    id="name-ascending"
                    checked={filters.sort === "name-ascending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="sort"
                    id="name-descending"
                    checked={filters.sort === "name-descending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.descending}`} title="по убыванию"></span>
                  <span className="visually-hidden">Убыванию</span>
                </label>
              </div>
            </li>
            <li>
              <p>Цене</p>
              <div>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="sort"
                    id="price-ascending"
                    checked={filters.sort === "price-ascending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="sort"
                    id="price-descending"
                    checked={filters.sort === "price-descending"}
                    onChange={handleChangeInput}
                  />
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
