import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MerchandiseImages from '../images/merchandise';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import products from '../lib/products';

function AboutMerchandise() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen-header">
      <div className="flex flex-col lg:flex-row w-10/12 gap-12">
        <img
          src={MerchandiseImages.Merchandise}
          alt="ilustrasi merchandise"
          className="my-12 lg:my-0 lg:w-1/2"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-3xl lg:text-5xl font-bold">
            Merchandise
          </h1>
          <p className="text-secondary lg:text-justify mt-8">
            Dengan dedikasi dan rasa cinta tim Pulih kepada para klien kami.
            Kami persembahkan Merchandise yang dibuat dengan penuh kasih yang
            dapat anda miliki.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ name, link, image }) {
  return (
    <div className="lg:w-72 w-48-percent">
      <img src={image} alt="totebag" />
      <h1 className="text-primary font-bold my-1 text-lg">{ name }</h1>
      <div className="flex justify-end">
        <Link to={link} target="_blank" className="w-full">
          <Button className="w-full lg:w-max justify-center rounded-lg lg:rounded-full">
            Buy now
          </Button>
        </Link>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function Products() {
  return (
    <div className="w-10/12 lg:w-full max-w-5xl mx-auto flex flex-wrap lg:justify-between mt-12 pb-8 gap-y-8 gap-x-2">
      {
        products.map((item) => (
          <ProductCard name={item.name} link={item.link} image={item.image} />
        ))
      }
      <div className="lg:w-72 w-48-percent">
        <img src={MerchandiseImages.CommingSoon} alt="totebag" />
      </div>
      <div className="lg:w-72 w-48-percent">
        <img src={MerchandiseImages.CommingSoon} alt="totebag" />
      </div>
      <div className="lg:w-72 w-48-percent">
        <img src={MerchandiseImages.CommingSoon} alt="totebag" />
      </div>
    </div>
  );
}

function Merchandise() {
  return (
    <MainLayout>
      <Header page="Merchandise" />
      <AboutMerchandise />
      <Products />
      <Footer />
    </MainLayout>
  );
}

export default Merchandise;
