import React, { useState, useEffect } from 'react';
import type { FormType } from './types';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import './Form.scss';

interface FormViewType {
  handleSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
}

export const FormView: React.FC<FormViewType> = ({ handleSubmit }) => {
  // TSX
  return (
    <form
      id='contact--form'
      onSubmit={handleSubmit}
    >
      <FormField fieldType='firstName'>First name:</FormField>
      <FormField fieldType='lastName'>Last name:</FormField>
      <FormField fieldType='email'>Email:</FormField>
      <FormField
        fieldType='message'
        isTextArea
      >
        Message:
      </FormField>
      <SubmitButton />
    </form>
  );
};
