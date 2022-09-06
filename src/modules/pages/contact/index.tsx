import React, { useEffect } from 'react';
import { ReactComponent as ContactSVG } from './assets/contact.svg';
import { ReactComponent as WaterMark } from './assets/contact_watermark.svg';
import { Form } from './components/form';
import './styles/Contact.scss';

export const Contact = () => {
  useEffect(() => console.log('contact me mounted'));
  return (
    <section
      id='contact'
      className='flex-center container--layout'
    >
      <div className='contact--page-wrapper'>
        <div className='svg--contact'>
          <div className='svg--watermark'>
            <WaterMark />
          </div>
          <div className='svg--contact-asset'>
            <ContactSVG />
          </div>
        </div>

        <div className='contact--form-container'>
          <div className='contact--header'>
            Say <span className='text-dropshadow'>hello</span>
          </div>

          <div className='contact--form'>
            <Form />
          </div>
        </div>
      </div>
      <p>contact page</p>
    </section>
  );
};
