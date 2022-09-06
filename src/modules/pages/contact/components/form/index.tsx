import './Form.scss';

export const Form = () => {
  return (
    <form id='contact--form'>
      <div className='contact--form-firstname'>
        <label htmlFor='firstName'>First name:</label>
        <input
          type='text'
          id='firstName'
        />
      </div>

      <div className='contact--form-lastname'>
        <label htmlFor='lastName'>Last name:</label>
        <input
          type='text'
          id='lastName'
        />
      </div>

      <div className='contact--form-email'>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
        />
      </div>

      <div className='contact--form-message'>
        <label htmlFor='message'>Message:</label>
        <input
          type='text'
          id='message'
          placeholder='Leave a message...'
        />
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
