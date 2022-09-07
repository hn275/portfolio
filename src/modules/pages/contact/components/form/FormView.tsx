import React, { useState, useEffect } from 'react';
import type { FormType } from './types';
import { FormField } from './FormField';
import './Form.scss';

interface FormViewType {
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
}
export const FormView: React.FC<FormViewType> = ({ formData, setFormData }) => {
  const { firstName, lastName, email, message } = formData;
  const firstNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setFormData((formData) => {
      //BUG: aitn working
      return (formData.firstName = text);
    });
  };
  // TSX
  return (
    <form id='contact--form'>
      <FormField
        fieldType={'text'}
        hasText={Boolean(firstName)}
        content={firstName}
        onInput={() => null}
      >
        First name:
      </FormField>
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
          value='asdfasdfasdfsdfdkl;kl;jkl;j'
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
        <button
          type='submit'
          className='btn--main'
          value='Send'
        >
          Send
        </button>
      </div>
    </form>
  );
};
