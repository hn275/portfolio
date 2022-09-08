import React from 'react';
import { BtnMain } from 'modules/common/components/buttons';
import { ReactComponent as Send } from '../../assets/send.svg';
import './Form.scss';

interface SubmitButtonTypes {
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const SubmitButton: React.FC<SubmitButtonTypes> = ({ handleSubmit }) => {
  return (
    <div className='contact--submit-button'>
      <BtnMain
        handleClick={handleSubmit}
        btnType='submit'
      >
        <>
          Send{' '}
          <span>
            <Send />
          </span>
        </>
      </BtnMain>
    </div>
  );
};
