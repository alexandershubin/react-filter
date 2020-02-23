import React from 'react';

export const Preloader = () => (
  <div className="preloader">
    <svg className="preloader__image" width={68} height={68} xmlns="http://www.w3.org/2000/svg" stroke="#689BFF">
      <g transform="translate(4 4)" strokeWidth={8} fill="none" fillRule="evenodd">
        <circle strokeOpacity=".3" cx={30} cy={30} r={30} />
        <path d="M60 30c0-9.94-8.06-30-30-30">
          <animateTransform attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="1s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  </div>
);
