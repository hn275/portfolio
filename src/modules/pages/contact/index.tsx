import React, { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => console.log('contact me mounted'));
  return (
    <section
      id='contact'
      className='flex-center container--layout'
    >
      <p>contact page</p>
    </section>
  );
};
