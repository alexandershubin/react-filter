import React from 'react';
import Logo from '../img/logo.png';

export const Header = () => (
  <header className="header container">
    <div className="header__logo">
      <img src={Logo} alt="logo" width={112} height={24}/>
    </div>
    <ul className="header__list">
      <li className="header__item">
        <a href="tel:+7(800)555-06-75" target="_blank" aria-label="tel">
          <svg width={12} height={13} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.34 8.94111C10.52 8.94111 9.72667 8.79667 8.98667 8.53667C8.75333 8.45 8.49333 8.515 8.31333 8.71L7.26667 10.1328C5.38 9.15778 3.61333 7.31611 2.67333 5.2L3.97333 4.00111C4.15333 3.79889 4.20667 3.51722 4.13333 3.26444C3.88667 2.46278 3.76 1.60333 3.76 0.715C3.76 0.325 3.46 0 3.1 0H0.793333C0.433333 0 0 0.173333 0 0.715C0 7.42444 5.15333 13 11.34 13C11.8133 13 12 12.545 12 12.1478V9.65611C12 9.26611 11.7 8.94111 11.34 8.94111Z"
              fill="#8391B2"/>
          </svg>
          <span>+7 (800) 555-06-75</span>
        </a>
      </li>
      <li className="header__item">
        <a href="mailto:sales@selectel.ru" target="_blank" aria-label="mail">
          <svg width={16} height={12} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.4 0H1.6C0.72 0 0.00799999 0.675 0.00799999 1.5L0 10.5C0 11.325 0.72 12 1.6 12H14.4C15.28 12 16 11.325 16 10.5V1.5C16 0.675 15.28 0 14.4 0ZM14.4 3L8 6.75L1.6 3V1.5L8 5.25L14.4 1.5V3Z"
              fill="#8391B2"/>
          </svg>
          <span>Написать в почту</span>
        </a>
      </li>
      <li className="header__item">
        <a href="tg://resolve?domain=SelectelTgbot" target="_blank">
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L0 5.02V5.67333L4.56 7.44L6.32 12H6.97333L12 0Z" fill="#8391B2"/>
          </svg>
          <span>Написать в Telegram</span>
        </a>
      </li>
    </ul>
  </header>
);
