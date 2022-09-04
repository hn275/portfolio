import React, { useRef } from 'react';
import { ResumeButton } from 'modules/common/resumeButton';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';
import { Hamburger } from '../../assets/images/svgs/Hamburger/Hamburger';
import './Navbar.scss';

export const Navbar = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleMenuOpen = () => {
    menuRef.current!.classList.add('is-open');
    console.log('clicked');
  };
  const handleMenuClose = () => {
    menuRef.current!.classList.remove('is-open');
  };

  // TSX
  return (
    <div className='nav--main-wrapper'>
      <nav className='nav--main'>
        <div className='nav--logo'>
          <Logo />
        </div>

        <div
          className='nav--links'
          ref={menuRef}
        >
          <div
            onClick={handleMenuClose}
            className='nav--links-close-menu'
          >
            close menu
          </div>
          {/* display: none for 820px+ */}
          <ul>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='nav--util flex-row'>
          <div className='nav--resume-btn'>
            <ResumeButton />
          </div>

          <div
            className='nav--hamburger'
            onClick={handleMenuOpen}
          >
            <Hamburger />
          </div>
        </div>
      </nav>
    </div>
  );
};
