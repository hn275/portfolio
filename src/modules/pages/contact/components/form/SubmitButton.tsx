import React from 'react';
import { BtnMain } from 'modules/common/components/buttons';

interface SubmitButtonTypes {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const SubmitButton: React.FC<SubmitButtonTypes> = ({ handleSubmit }) => {
  return (
    <div className='contact--submit-buttom'>
      <BtnMain
        handleClick={handleSubmit}
        btnType='submit'
      >
        Send
      </BtnMain>
    </div>
  );
};
