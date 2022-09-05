import React, { useRef } from 'react';
import { BtnMain } from 'modules/common/components/buttons';
import { ReactComponent as Logo } from 'assets/images/Logo.svg';
import { Hamburger } from 'assets/images/svgs/Hamburger/Hamburger';
import { NavLink } from 'react-router-dom';
import { useRedirect } from 'hooks';
import './Navbar.scss';

export const Navbar = () => {
  // mobile screen slide in menu toggle
  const menuRef = useRef<HTMLDivElement | null>(null);
  const handleMenuOpen = () => {
    menuRef.current!.classList.add('is-open');
  };
  // close menu
  const handleMenuClose = () => {
    menuRef.current!.classList.remove('is-open');
  };

  // Navigate back home
  const redirect = useRedirect();
  const handleHomeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    redirect('/home');
  };

  // TSX
  return (
    <div className='nav--main-wrapper'>
      <nav className='nav--main'>
        <div
          className='nav--logo'
          onClick={handleHomeClick}
        >
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
          <ul>
            <li>
              <NavLink to='portfolio'>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to='skills'>Skills</NavLink>
            </li>
            <li>
              <NavLink to='about'>About</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className='nav--util flex-row'>
          <div className='nav--resume-btn'>
            <BtnMain>Resume</BtnMain>
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
