import React from 'react';
import Images from '../images';

function Header() {
  return (
    <div className="bg-pink">
      <div className="flex container mx-auto justify-between py-2">
        <img src={Images.Logo} alt="logo pulih at the peak" width="60px" />
        <div className="flex items-center gap-10 text-pink">
          <h1>Beranda</h1>
          <h1>Tentang Kami</h1>
          <h1>Layanan</h1>
          <h1>Psikolog</h1>
          <h1>Merchandise</h1>
        </div>
        <div className="flex items-center gap-4 text-pink">
          <h1>ID</h1>
          <h1>Hubungi Kami</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
