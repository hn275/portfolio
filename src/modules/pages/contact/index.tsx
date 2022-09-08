import React from 'react';
import { ReactComponent as ContactSVG } from './assets/contact.svg';
import { ReactComponent as WaterMark } from './assets/contact_watermark.svg';
import { ReactComponent as CodeSandBox } from './assets/codesandbox.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Email } from './assets/email.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import { Form } from './components/form';
import './styles/Contact.scss';

export const Contact = () => {
  return (
    <>
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

        <div className='contact--external-links'>
          <a
            href=''
            target='_blank'
          >
            <Email />
          </a>
          <a
            href=''
            target='_blank'
          >
            <Github />
          </a>
          <a
            href=''
            target='_blank'
          >
            <CodeSandBox />
          </a>
          <a
            href=''
            target='_blank'
          >
            <LinkedIn />
          </a>
        </div>
      </section>
    </>
  );
};
