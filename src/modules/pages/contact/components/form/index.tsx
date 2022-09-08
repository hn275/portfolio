import React, { useState } from 'react';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import './Form.scss';

interface FormType {}

export const Form: React.FC<FormType> = ({}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFirstName(() => '');
    setLastName(() => '');
    setEmail(() => '');
    setMessage(() => '');
  };

  // TSX
  return (
    <form id='contact--form'>
      <FormField
        value={firstName}
        setValue={setFirstName}
        fieldType='firstName'
      >
        First name:
      </FormField>

      <FormField
        value={lastName}
        setValue={setLastName}
        fieldType='lastName'
      >
        Last name:
      </FormField>
      <FormField
        value={email}
        setValue={setEmail}
        fieldType='email'
      >
        Email:
      </FormField>
      <FormField
        fieldType='message'
        isTextArea
        value={message}
        setValue={setMessage}
      >
        Message:
      </FormField>
      <SubmitButton handleSubmit={handleSubmit} />
    </form>
  );
};
