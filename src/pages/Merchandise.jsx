import React from 'react';
import MerchandiseImages from '../images/merchandise';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutMerchandise() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen-header">
      <div className="flex w-10/12 gap-12">
        <img
          src={MerchandiseImages.Merchandise}
          alt="ilustrasi merchandise"
          style={{ width: '50%' }}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-5xl font-bold">
            Merchandise
          </h1>
          <p className="text-secondary text-justify mt-8">
            Dengan dedikasi dan rasa cinta tim Pulih kepada para klien kami.
            Kami persembahkan Merchandise yang dibuat dengan penuh kasih yang
            dapat anda miliki.
          </p>
        </div>
      </div>
    </div>
  );
}

function Merchandise() {
  return (
    <MainLayout>
      <Header page="Merchandise" />
      <AboutMerchandise />
      <Footer />
    </MainLayout>
  );
}

export default Merchandise;
