import React from 'react';

export const Filter = ({
  handleFilterChange,
  gpu,
  range,
  ssd,
  raid
}) => (
  <form className="form" action="#" method="post">
    <ul className="form__list">
      <li className="form__item form__item--range">
        <label htmlFor="cores">vCPU</label>
        <div className="output">
          <input className="form__slider" type="range" id="cores" name="range" min={2} max={12} step={2}
                 defaultValue={range} onInput={handleFilterChange}/>
          <div className="output__count">
            <span>2</span>
            <div className="output__wrap">
              <output name="count">{range}</output>
              <span> ядер</span>
            </div>
            <span>12</span>
          </div>
        </div>
      </li>
      <li className="form__item form__item--checkbox">
        <input checked={gpu} onChange={handleFilterChange} className="form__item form__item--one"
               type="checkbox" name="gpu"
               id="filter-one"/>
        <label htmlFor="filter-one">GPU</label>
      </li>
      <li className="form__item form__item--checkbox">
        <input checked={raid} onChange={handleFilterChange} className="form__item form__item--two"
               type="checkbox" name="raid"
               id="filter-two"/>
        <label htmlFor="filter-two">RAID</label>
      </li>
      <li className="form__item form__item--checkbox">
        <input checked={ssd} onChange={handleFilterChange} className="form__item form__item--three"
               type="checkbox" name="ssd"
               id="filter-three"/>
        <label htmlFor="filter-three">SSD</label>
      </li>
    </ul>
  </form>
);
