import React, { useRef, useEffect } from 'react';
import './Form.scss';

interface FormFieldType {
  fieldType: string;
  children: React.ReactNode;
  isTextArea?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const FormField: React.FC<FormFieldType> = ({
  fieldType,
  children,
  isTextArea,
  setValue,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fieldContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    /**
     * If the input field is empty, label is white and spacing to the left
     * if the input field has text, label is blue and the alignment is reset to
     */
    if (value) {
      fieldContainerRef.current!.dataset.text = 'has-text';
    } else {
      fieldContainerRef.current!.dataset.text = '';
    }
  }, [value]);

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(() => event.target.value);
  };

  if (isTextArea) {
    return (
      <div
        ref={fieldContainerRef}
        data-text=''
        className='contact--form-field'
      >
        <label
          htmlFor={fieldType}
          className='has-text'
        >
          Message:
        </label>
        <textarea
          className='field'
          id={fieldType}
          placeholder="Let's get in touch!"
          onChange={handleInput}
          ref={inputRef as any}
          value={value}
        ></textarea>
      </div>
    );
  }

  // TSX
  return (
    <div
      className='contact--form-field'
      ref={fieldContainerRef}
      data-text=''
    >
      <label htmlFor={fieldType}>{children}</label>
      <input
        ref={inputRef}
        type='text'
        id={fieldType}
        className='field'
        onChange={handleInput}
        value={value}
      />
    </div>
  );
};
