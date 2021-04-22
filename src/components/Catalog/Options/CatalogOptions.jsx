import React, {useState} from 'react';
import Button from '../../Button';
import s from './CatalogOptions.module.css';
import RangeSlider from './RangeSlider.jsx';

export default function CatalogOptions() {

  /*
  const [options, setOptions] = useState({
    presentation: {
      cards: true,
      list: false,
    },
    category: {
      rings: true,
      beads: true,
    },
    budget: {
      min: null,
      max: null,
    }
  })
  */


  // Вот эти 4 - 1 общий объект (смотри выше)
  const [presentation, setPresentation] = useState({
    activeView: "cards",
  })

  const [category, setCategory] = useState({
    rings: true,
    beads: true,
  })

  const [budget, setBuget] = useState({
    min: null,
    max: null,
  })

  const [sort, setSort] = useState({
    activeSort: "name-ascending",
  })



  // А эти 2 функции собираешь в одну и универсализируешь с помощью свитч-кейса
  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setCategory(prevForm => ({...prevForm, [name]: value}));
    // setBuget(prevForm => ({...prevForm, [name]: value}));
  }

  const checkOnlyOne = ({target}) => {
    // setPresentation({activeView: target.name});
    setSort({activeSort: target.name});
  };



  const handleSubmit = evt => {
    evt.preventDefault();

    // handleSend(options);

    // сброс не понадобится
    // setOptions({
    //   presentation: '',
    //   category: '',
    //   budget: '',
    //   sort: '',
    // })
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
                  name="cards"
                  checked={presentation.activeView === "cards"}
                  onChange={checkOnlyOne}
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
                  name="list"
                  checked={presentation.activeView === "list"}
                  onChange={checkOnlyOne} 
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
                  name="rings"
                  checked={category.rings}
                  onChange={handleChange}
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
                  name="beads"
                  checked={category.beads}
                  onChange={handleChange}
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
            name="min"
            value={budget.min}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="до"
            pattern="[+]?(?<!\.)\b[0-9]+\b(?!\.[0-9])"
            style={{float: "right"}}
            name="max"
            value={budget.max}
            onChange={handleChange}
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
                    name="name-ascending"
                    checked={sort.activeSort === "name-ascending"}
                    onChange={checkOnlyOne}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="name-descending"
                    checked={sort.activeSort === "name-descending"}
                    onChange={checkOnlyOne}
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
                    name="price-ascending"
                    checked={sort.activeSort === "price-ascending"}
                    onChange={checkOnlyOne}
                  />
                  <span className={`${s.custom_arrow} ${s.ascending}`} title="по возрастанию"></span>
                  <span className="visually-hidden">Возрастанию</span>
                </label>
                <label>
                  <input
                    className="visually-hidden"
                    type="radio"
                    name="price-descending"
                    checked={sort.activeSort === "price-descending"}
                    onChange={checkOnlyOne}
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
