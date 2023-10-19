/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Images from '../images';
import Button from './Button';

function Header({ page }) {
  const [isShow, setIsShow] = useState(false);
  const [isShowSlideMenu, setIsShowSlideMenu] = useState(false);
  const [language, setLanguage] = useState('lang' in localStorage ? localStorage.getItem('lang') : 'en');
  const { i18n, t } = useTranslation();

  function changeLanguage(code) {
    i18n.changeLanguage(code);
    setLanguage(code);
    localStorage.setItem('lang', code);
    setIsShow(false);
  }

  return (
    <div>
      <div className="bg-pink fixed top-0 z-10 w-full">
        <div className="flex container mx-auto justify-between py-2 px-8 lg:px-0">
          <Link to="/">
            <img src={Images.Logo} alt="logo pulih at the peak" width="70px" />
          </Link>
          <div className="hidden lg:flex items-center gap-10 text-primary font-medium">
            <a href="/" className={page === 'Home' && 'border-b-primary'}>
              {t('header.home')}
            </a>
            <a href="/about" className={page === 'About' && 'border-b-primary'}>
              {t('header.about')}
            </a>
            <a href="/service" className={page === 'Service' && 'border-b-primary'}>
              {t('header.services')}
            </a>
            <a href="/psychologist" className={page === 'Psychologist' && 'border-b-primary'}>
              {t('header.psycholog')}
            </a>
            <a href="/merchandise" className={page === 'Merchandise' && 'border-b-primary'}>
              {t('header.merchandise')}
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-primary">
            <div className="relative">
              <div
                className="flex items-center cursor-pointer uppercase"
                onClick={() => setIsShow(!isShow)}
                role="button"
                tabIndex={0}
              >
                { language }
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L12 12L16 8" stroke="#C01A78" strokeLinecap="round" />
                </svg>
              </div>
              <div className={`absolute bg-solid-lang p-4 rounded-xl w-40 top-8 right-0 ${isShow ? 'visible' : 'invisible'}`}>
                <div
                  className="text-white cursor-pointer"
                  onClick={() => changeLanguage('id')}
                  role="button"
                  tabIndex={0}
                >
                  Bahasa Indonesia
                </div>
                <div
                  className="text-white cursor-pointer mt-2"
                  onClick={() => changeLanguage('en')}
                  role="button"
                  tabIndex={0}
                >
                  English
                </div>
              </div>
            </div>
            <Button className="bg-primary">
              {t('header.contact')}
            </Button>
          </div>
          <div
            className="lg:hidden flex items-center cursor-pointer"
            onClick={() => setIsShowSlideMenu(true)}
            tabIndex={0}
            role="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.00098H21M3 12.001H21M3 18.001H21" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      {/* Hamburger Menu Slide */}
      <div className={`relative z-50 ${!isShowSlideMenu && 'invisible'}`}>
        <div className="fixed inset-0 bg-gray-800 opacity-25" />
        <nav className={`fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-pink overflow-y-auto text-right transition ease-in-out duration-300 ${!isShowSlideMenu ? 'translate-x-full' : 'translate-x-0'}`}>
          <div className="flex flex-col items-end justify-between h-full">
            <svg className="cursor-pointer" onClick={() => setIsShowSlideMenu(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2.6416L21 20.4577M3 20.4577L21 2.6416" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col gap-6 text-primary">
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
            <div>
              <div className="flex items-center border-primary rounded-full text-sm">
                <div className="bg-primary py-0.5 px-4 rounded-full text-white cursor-pointer">ID</div>
                <span className="py-0.5 px-4 rounded-full text-primary cursor-pointer">ENG</span>
              </div>
              <Button className="bg-primary mt-4">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </nav>
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
