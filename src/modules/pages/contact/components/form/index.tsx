import React, { useState, useEffect } from 'react';
import { FormView } from './FormView';
import type { FormType } from './types';
import './Form.scss';

export const Form = () => {
  const [formData, setFormData] = useState<FormType>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault(); // BUG: this is wrong
    console.log(event.target.value);
  };

  // TSX
  return <FormView handleSubmit={handleSubmit} />;
};
