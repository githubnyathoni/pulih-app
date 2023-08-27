import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import ServiceImages from '../images/service';
import Images from '../images';
import ButtonIcon from '../components/ButtonIcon';
import Footer from '../components/Footer';
import serviceCategories from '../lib/service_categories';

function ServiceSection() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen-header">
      <div className="flex w-10/12 gap-12">
        <img src={ServiceImages.Service} alt="layanan pulih@thepeak" style={{ width: '50%' }} />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-5xl font-bold">
            Layanan Pulih@thePeak
          </h1>
          <p className="text-secondary text-justify mt-8">
            Kami telah membantu mengatasi berbagai masalah pribadi maupun keluarga.
            Dengan layanan yang kami sediakan, anda dapat berkonsultasi dimana saja
            dan kapan saja karena kami percaya kesehatan mental  anda adalah prioritas kami.
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCategories() {
  const [selectedCategories, setSelectedCategories] = useState(0);
  const currentCategory = serviceCategories[selectedCategories];

  return (
    <div className="bg-shape-service">
      <div className="flex flex-col items-center justify-center container mx-auto py-24">
        <h1 className="text-primary text-5xl font-bold">
          Kategori Layanan Pulih@thePeak
        </h1>
        <p className="text-secondary mt-6">
          Bersama Pulih@thePeak, anda dapat berkonsultasi dengan Psikolog sesuai kebutuhan anda.
        </p>
        <div className="flex mt-16">
          <div
            className={`${selectedCategories === 0 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} rounded-l-full py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(0)}
            onKeyDown={() => setSelectedCategories(0)}
            role="button"
            tabIndex={0}
          >
            Konseling Individu
          </div>
          <div
            className={`${selectedCategories === 1 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(1)}
            onKeyDown={() => setSelectedCategories(1)}
            role="button"
            tabIndex={0}
          >
            Konseling Pasangan
          </div>
          <div
            className={`${selectedCategories === 2 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(2)}
            onKeyDown={() => setSelectedCategories(2)}
            role="button"
            tabIndex={0}
          >
            Konseling Keluarga
          </div>
          <div
            className={`${selectedCategories === 3 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(3)}
            onKeyDown={() => setSelectedCategories(3)}
            role="button"
            tabIndex={0}
          >
            Pemeriksaan Psikologis
          </div>
          <div
            className={`${selectedCategories === 4 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(4)}
            onKeyDown={() => setSelectedCategories(4)}
            role="button"
            tabIndex={0}
          >
            Pelatihan/Workshop
          </div>
          <div
            className={`${selectedCategories === 5 ? 'bg-pink-primary text-white font-bold' : 'bg-pink text-secondary'} rounded-r-full py-4 px-8 duration-200 transition-all`}
            onClick={() => setSelectedCategories(5)}
            onKeyDown={() => setSelectedCategories(5)}
            role="button"
            tabIndex={0}
          >
            Pelatihan/Workshop
          </div>
        </div>
        <div className="flex justify-between w-full mt-24">
          {
            selectedCategories > 0
              ? (
                <ButtonIcon className="w-12" onClick={() => setSelectedCategories(selectedCategories - 1)}>
                  <img src={Images.LeftArrowActive} alt="left arrow active" width="32px" />
                </ButtonIcon>
              )
              : (
                <ButtonIcon className="w-12 cursor-not-allowed">
                  <img src={Images.LeftArrowInactive} alt="left arrow inactive" width="32px" />
                </ButtonIcon>
              )
          }
          <div className="flex items-center w-2/3">
            <p className="text-secondary mr-12 ease-in-out transition-all duration-100 w-2/3">
              { currentCategory.description }
            </p>
            <img src={currentCategory.image} alt="ilustrasi konseling individu" width="200px" />
          </div>
          {
            selectedCategories < 5
              ? (
                <ButtonIcon className="w-12" onClick={() => setSelectedCategories(selectedCategories + 1)}>
                  <img src={Images.RightArrowActive} alt="right arrow active" width="32px" />
                </ButtonIcon>
              )
              : (
                <ButtonIcon className="w-12 cursor-not-allowed">
                  <img src={Images.RightArrowInactive} alt="right arrow inactive" width="32px" />
                </ButtonIcon>
              )
          }
        </div>
      </div>
      <WhySection />
    </div>
  );
}

function WhySection() {
  return (
    <div className="container mx-auto my-24">
      <h1 className="text-center text-primary text-5xl font-bold">
        Kenapa Pulih@thePeak?
      </h1>
      <div className="flex justify-around mt-16">
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhyFirst} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-secondary">
            Psikolog berpengalaman sesuai dengan bidangnya
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhySecond} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-secondary">
            Menjunjung tinggi kode etik profesi
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhyThird} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-secondary">
            Memiliki pemahaman mendalam tentang perspektif gender
          </p>
        </div>
      </div>
    </div>
  );
}

function Service() {
  return (
    <MainLayout>
      <Header page="Service" />
      <ServiceSection />
      <ServiceCategories />
      <Footer />
    </MainLayout>
  );
}

export default Service;
