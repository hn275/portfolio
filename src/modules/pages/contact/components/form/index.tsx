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

  // TSX
  return (
    <FormView
      formData={formData}
      setFormData={setFormData}
    />
  );
};
