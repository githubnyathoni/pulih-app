import React from 'react';
import Images from '../images';
import Button from './Button';

function Header() {
  return (
    <div className="bg-pink sticky top-0">
      <div className="flex container mx-auto justify-between py-2">
        <img src={Images.Logo} alt="logo pulih at the peak" width="60px" />
        <div className="flex items-center gap-10 text-primary">
          <h1>Beranda</h1>
          <h1>Tentang Kami</h1>
          <h1>Layanan</h1>
          <h1>Psikolog</h1>
          <h1>Merchandise</h1>
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

export default Header;
