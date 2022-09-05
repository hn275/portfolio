import React from 'react';

interface BtnMainProps {
  children: React.ReactChild;
}
export const BtnMain: React.FC<BtnMainProps> = ({ children }) => {
  return (
    <>
      <button className='btn--main'>{children}</button>
    </>
  );
};
