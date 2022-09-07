import React, { useState, useEffect } from 'react';
import './Form.scss';

interface FormType {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const Form = () => {
  // TSX
  return (
    <form id='contact--form'>
      <div className='contact--form-field'>
        <label
          htmlFor='firstName'
          className='has-text'
        >
          First name:
        </label>
        <input
          type='text'
          id='firstName'
          className='field'
        />
      </div>

      <div className='contact--form-field'>
        <label
          htmlFor='lastName'
          className='has-text'
        >
          Last name:
        </label>
        <input
          type='text'
          id='lastName'
          className='field'
        />
      </div>

      <div className='contact--form-field'>
        <label
          htmlFor='email'
          className='has-text'
        >
          Email:
        </label>
        <input
          type='text'
          id='email'
          className='field'
        />
      </div>

      <div className='contact--form-field'>
        <label
          htmlFor='message'
          className='has-text'
        >
          Message:
        </label>
        <textarea
          className='field'
          id='message'
          placeholder="Let's get in touch!"
        ></textarea>
      </div>

      <div className='contact--submit-buttom'>
        <input
          type='submit'
          className='btn--main'
          value='Send'
        />
      </div>
    </form>
  );
};
