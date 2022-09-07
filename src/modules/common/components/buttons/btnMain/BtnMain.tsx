import React from 'react';

interface BtnMainProps {
  children: React.ReactChild;
  btnType?: 'submit' | undefined;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const BtnMain: React.FC<BtnMainProps> = ({
  btnType,
  children,
  handleClick,
}) => {
  return (
    <>
      <button
        type={btnType}
        className='btn--main'
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};
