import React from 'react';
import './Card.scss';

interface CardProps {
  name: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ name, children }) => {
  return (
    <div className='skills--hard-skill-card'>
      {children}
      <h3>{name}</h3>
    </div>
  );
};
