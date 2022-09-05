import React from 'react';

interface BtnSecondaryProps {
  children: React.ReactChild;
  handleClick?: any;
}

export const BtnSecondary: React.FC<BtnSecondaryProps> = ({
  children,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className='btn--secondary'
    >
      {children}
    </button>
  );
};
