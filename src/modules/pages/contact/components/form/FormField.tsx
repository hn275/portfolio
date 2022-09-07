import './Form.scss';
interface FormFieldType {
  fieldType: string;
  hasText: boolean;
  children: React.ReactNode;
  content: string;
  onInput: any;
}

export const FormField: React.FC<FormFieldType> = ({
  fieldType,
  hasText,
  children,
  content,
  onInput,
}) => {
  return (
    <div className='contact--form-field'>
      <label
        htmlFor={fieldType}
        className={hasText ? 'has-text' : ''}
      >
        {children}
      </label>
      <input
        type='text'
        id={fieldType}
        className='field'
        value={content}
        onChange={onInput}
      />
    </div>
  );
};
