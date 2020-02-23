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
      <li className="form__item">
        <label htmlFor="cores">vCPU</label>
        <div className="output">
          <input className="form__item--slider" type="range" id="cores" name="range" min={2} max={12} step={2}
                 defaultValue={range} onInput={handleFilterChange}/>
          <div className="output__count">
            <span>2</span>
            <span>{range}</span>
            <span>12</span>
          </div>
        </div>
      </li>
      <li className="form__item">
        <input checked={gpu} onChange={handleFilterChange} className="form__item form__item--one"
               type="checkbox" name="gpu"
               id="filter-one"/>
        <label htmlFor="filter-one">GPU</label>
      </li>
      <li className="form__item">
        <input checked={raid} onChange={handleFilterChange} className="form__item form__item--two"
               type="checkbox" name="raid"
               id="filter-two"/>
        <label htmlFor="filter-two">RAID</label>
      </li>
      <li className="form__item">
        <input checked={ssd} onChange={handleFilterChange} className="form__item form__item--three"
               type="checkbox" name="ssd"
               id="filter-three"/>
        <label htmlFor="filter-three">SSD</label>
      </li>
    </ul>
  </form>
);
