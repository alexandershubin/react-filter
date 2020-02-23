import React from 'react';
import Product from '../img/image.png'


export const Intro = () => (
  <section className="block container">
    <div className="block__wrapper">
      <div className="block__left">
        <h2 className="block__header">Надежные серверы для проектов любой сложности</h2>
        <p className="block__description">Выделенный сервер — это аренда сервера под задачи вашего проекта с возможностью
          свободно распоряжаться ресурсами машины и установки любого программного обеспечения.</p>
        <button className="block__button button"> Готовые серверы</button>
      </div>
      <div className="block-right">
        <img src={Product} alt="image" width={380} height={363} />
      </div>
    </div>
  </section>
);
