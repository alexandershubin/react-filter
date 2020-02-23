import React from 'react';

export const ListItem = ({item}) => (
  <li className="product__list">
    <div className="product__first">
      <h3>{item.name}</h3>
      <div>
        <span>{item.cpu.count}</span> x {item.cpu.name}
        <span>{item.cpu.count * item.cpu.cores < 5 ? item.cpu.count * item.cpu.cores + ' ядра' : item.cpu.count * item.cpu.cores + ' ядер'}</span>
      </div>
    </div>
    <div className="product__second">
      <span>{item.ram}</span>
      <div className="product__ram">
        <span>{item.disk.value + ' ГБ'}</span>
        <span>{item.disk.type}</span>
      </div>
      <span>{item.gpu ? item.gpu : ''}</span>
    </div>
    <div className="product__right">
      <h3>{Math.floor(item.price)} ₽/месяц</h3>
      <button className="product__button button">Заказать</button>
    </div>
  </li>
);
