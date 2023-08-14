import React from 'react';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import ServiceImages from '../images/service';
import Images from '../images';
import ButtonIcon from '../components/ButtonIcon';
import Footer from '../components/Footer';

function ServiceSection() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen-header">
      <div className="flex w-10/12 gap-4">
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
  return (
    <div className="bg-shape-service">
      <div className="flex flex-col items-center justify-center container mx-auto py-24">
        <h1 className="text-primary text-5xl font-bold">
          Kategori Layanan Pulih@thePeak
        </h1>
        <p className="text-secondary mt-2">
          Bersama Pulih@thePeak, anda dapat berkonsultasi dengan Psikolog sesuai kebutuhan anda.
        </p>
        <div className="flex mt-16">
          <div className="bg-pink-primary text-white font-bold rounded-l-full py-4 px-8 ">
            Konseling Individu
          </div>
          <div className="bg-pink text-secondary py-4 px-8 ">
            Konseling Pasangan
          </div>
          <div className="bg-pink text-secondary py-4 px-8 ">
            Konseling Keluarga
          </div>
          <div className="bg-pink text-secondary py-4 px-8 ">
            Pemeriksaan Psikologis
          </div>
          <div className="bg-pink text-secondary py-4 px-8 ">
            Pelatihan/Workshop
          </div>
          <div className="bg-pink text-secondary rounded-r-full py-4 px-8 ">
            Pelatihan/Workshop
          </div>
        </div>
        <div className="flex justify-between w-full mt-24">
          <ButtonIcon className="w-12">
            <img src={Images.LeftArrowInactive} alt="left arrow inactive" width="32px" />
          </ButtonIcon>
          <div className="flex items-center">
            <p className="text-secondary mr-12">
              Konsultasi psikologis one on one (1 psikolog dan 1 klien).
            </p>
            <img src={Images.IlustrasiIndividu} alt="ilustrasi konseling individu" />
          </div>
          <ButtonIcon className="w-12">
            <img src={Images.RightArrowActive} alt="right arrow active" width="32px" />
          </ButtonIcon>
        </div>
      </div>
      <WhySection />
    </div>
  );
}

function WhySection() {
  return (
    <div className="container mx-auto my-24">
      <h1 className="text-center text-primary text-4xl font-bold">
        Kenapa Pulih@thePeak?
      </h1>
      <div className="flex justify-around mt-16">
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhyFirst} alt="kenapa pulih@thepeak" width="200px" />
          <p className="text-secondary">
            Psikolog berpengalaman sesuai dengan bidangnya
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhySecond} alt="kenapa pulih@thepeak" width="200px" />
          <p className="text-secondary">
            Menjunjung tinggi kode etik profesi
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <img src={ServiceImages.WhyThird} alt="kenapa pulih@thepeak" width="200px" />
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
