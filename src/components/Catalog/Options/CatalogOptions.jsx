import React, {useState} from 'react';
import Button from '../../Button';
import s from './CatalogOptions.module.css';
import RangeSlider from './RangeSlider.jsx';
import PropTypes from 'prop-types';

function CatalogOptions({onGetFilters: handleGetFilters, minBudget, maxBudget}) {

  const [options, setOptions] = useState({
    view: "cards",
    category: {
      rings: true,
      beads: true,
      pyrography: true,
      teaHouses: true,
    },
    // Пока оставлю, на всякий случай, вдруг передумаю
    // budget: {
    //   min: minBudget,
    //   max: maxBudget,
    // },
    sort: "name-ascending",
  })
  const [budgetMin, setBudgetMin] = useState(minBudget);
  const [budgetMax, setBudgetMax] = useState(maxBudget);

  const handleChangeInput = ({target}) => {
    const [subObject, name] = target.name.split("_");
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

    const newState = target.type !== 'radio'
    ?
    {...options, [subObject]: {...options[subObject], [name]: value}}
    :
    {...options, [name]: value};

    setOptions(newState);
  };

  const getCoordinates = (coordinates) => {
    const [minCoord, maxCoord] = coordinates;
    setBudgetMin(minCoord);
    setBudgetMax(maxCoord);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    handleGetFilters(options, budgetMin, budgetMax);
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
                  name="_view"
                  id="cards"
                  checked={options.view === "cards"}
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
                  name="_view"
                  id="list"
                  checked={options.view === "list"}
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
                  name="category_rings"
                  checked={options.category.rings}
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
                  name="category_beads"
                  checked={options.category.beads}
                  onChange={handleChangeInput}
                />
                <span className={s.custom_checkbox}></span>
                <span>Изделия из бисера</span>
              </label>
            </li>
          </ul>
        </fieldset>

        <fieldset className={s.budget}>
          <legend>Цена, &#8381;</legend>
          <RangeSlider 
            currentMin={Number(budgetMin)}
            currentMax={Number(budgetMax)}
            maxBudget={maxBudget}
            getCoordinates={getCoordinates}
          />
          <input
            // При такой реализации тут должны быть не инпуты, но оставлю так, на случай, если надо будет переделать
            type="text"
            placeholder="от"
            // pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"
            name="budget_min"
            value={budgetMin}
            // onChange={handleChangeInput}
            disabled
          />
          <input
            type="text"
            placeholder="до"
            // pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"
            style={{float: "right"}}
            name="budget_max"
            value={budgetMax}
            // onChange={handleChangeInput}
            disabled
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
                    name="_sort"
                    id="name-ascending"
                    checked={options.sort === "name-ascending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="А-Я"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="_sort"
                    id="name-descending"
                    checked={options.sort === "name-descending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.descending}`} title="Я-А"></span>
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
                    name="_sort"
                    id="price-ascending"
                    checked={options.sort === "price-ascending"}
                    onChange={handleChangeInput}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="_sort"
                    id="price-descending"
                    checked={options.sort === "price-descending"}
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

CatalogOptions.propTypes = {
  minBudget: PropTypes.number,
  maxBudget: PropTypes.number,
  onGetFilters: PropTypes.func,
};

export default CatalogOptions;
