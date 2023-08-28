/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Images from '../images';
import Button from './Button';

function Header({ page }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="bg-pink sticky top-0 z-10">
      <div className="flex container mx-auto justify-between py-2">
        <Link to="/">
          <img src={Images.Logo} alt="logo pulih at the peak" width="70px" />
        </Link>
        <div className="flex items-center gap-10 text-primary">
          <a href="/" className={page === 'Home' && 'border-b-primary'}>
            Beranda
          </a>
          <a href="/about" className={page === 'About' && 'border-b-primary'}>
            Tentang Kami
          </a>
          <a href="/service" className={page === 'Service' && 'border-b-primary'}>
            Layanan
          </a>
          <a href="/psychologist" className={page === 'Psychologist' && 'border-b-primary'}>
            Psikolog
          </a>
          <a href="/merchandise" className={page === 'Merchandise' && 'border-b-primary'}>
            Merchandise
          </a>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setIsShow(!isShow)}
              role="button"
              tabIndex={0}
            >
              ID
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L12 12L16 8" stroke="#C01A78" strokeLinecap="round" />
              </svg>
            </div>
            <div className={`absolute bg-solid-lang p-4 rounded-xl w-40 top-8 right-0 ${isShow ? 'visible' : 'invisible'}`}>
              <h2 className="text-white">Bahasa Indonesia</h2>
              <h2 className="text-white mt-2">English</h2>
            </div>
          </div>
          <Button className="bg-primary">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {
  page: '',
};

export default Header;
