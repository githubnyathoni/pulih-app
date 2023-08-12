import React from 'react';
import PropTypes from 'prop-types';
import Images from '../images';
import Button from './Button';

function Header({ page }) {
  return (
    <div className="bg-pink sticky top-0">
      <div className="flex container mx-auto justify-between py-2">
        <img src={Images.Logo} alt="logo pulih at the peak" width="60px" />
        <div className="flex items-center gap-10 text-primary">
          <a href="/" className={page === 'Home' && 'border-b-primary'}>
            Beranda
          </a>
          <a href="/about" className={page === 'About' && 'border-b-primary'}>Tentang Kami</a>
          <a href="/services">Layanan</a>
          <a href="/psychologist">Psikolog</a>
          <a href="/merchandise">Merchandise</a>
        </div>
        <div className="flex items-center gap-4 text-primary">
          <h1>ID</h1>
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
