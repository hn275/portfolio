import React from 'react';
import './Hamburger.scss';

export const Hamburger = () => {
  return (
    <svg
      width='100%'
      viewBox='0 0 38 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='hamburger'>
        <path
          id='bar3'
          d='M17 22L36 22'
          stroke='#61DAFB'
          strokeWidth='4'
          strokeLinecap='round'
        />
        <path
          id='bar2'
          d='M11 12L36 12'
          stroke='#61DAFB'
          strokeWidth='4'
          strokeLinecap='round'
        />
        <path
          id='bar1'
          d='M2 2H36'
          stroke='#61DAFB'
          strokeWidth='4'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
};
