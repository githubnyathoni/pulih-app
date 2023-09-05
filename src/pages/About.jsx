import React from 'react';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutImages from '../images/about';

function AboutSection() {
  return (
    <div className="lg:h-screen-header">
      <img src={AboutImages.Squad} alt="pulih at the peak squad" />
      <div className="flex flex-col items-start px-8 lg:items-center bg-pink bg-about py-12">
        <h1 className="text-primary text-3xl lg:text-5xl font-bold">
          Tentang Pulih@thePeak
        </h1>
        <p className="text-secondary text-left lg:text-center lg:w-6/12 py-6">
          Pulih@thePeak merupakan kewirausahaan sosial yang didirikan pada 21 April 2014,
          yang didedikasikan sebagai keberlanjutan dari Yayasan Pulih yaitu organisasi
          nirlaba yang berkiprah sejak tahun 2002 dalam pemulihan trauma psikologis dan psikososial.
        </p>
      </div>
    </div>
  );
}

function Vision() {
  return (
    <div className="flex flex-col items-center py-12 lg:flex-row">
      <img src={AboutImages.Vision} alt="ilustrasi visi" className="w-3/5 lg:w-1/3" />
      <div className="flex flex-col justify-center lg:pl-8 mt-8">
        <h1 className="text-primary text-2xl font-bold">Visi</h1>
        <p className="text-secondary">
          Menjadi pusat pemberdayaan perempuan, remaja dan keluarga yang terdepan
          di Indonesia dan diakui secara internasional.
        </p>
      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="flex flex-col-reverse items-center lg:py-12 lg:flex-row">
      <div className="flex flex-col justify-center pr-8 py-8 lg:py-0">
        <h1 className="text-primary text-2xl font-bold">Misi</h1>
        <p className="text-secondary">
          Memberikan layanan jasa serta dukungan bagi perempuan, remaja, keluarga,
          dan masyarakat melalui berbagai program pemberdayaan yang bersifat kuratif,
          preventif, dan edukatif untuk membangun keluarga yang sehat, sejahtera, dan bahagia.
        </p>
      </div>
      <img src={AboutImages.Mission} alt="ilustrasi misi" className="w-3/5 lg:w-1/3" />
    </div>
  );
}

function VisionMission() {
  return (
    <div className="container mx-auto flex flex-col h-screen-header w-10/12 lg:w-8/12 justify-center gap-12">
      <Vision />
      <Mission />
    </div>
  );
}

function TogetherSection() {
  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-primary lg:text-center text-3xl lg:text-5xl font-bold">
        Ragam Kegiatan Bersama Pulih@thePeak
      </h1>
      <div id="first-row" className="flex flex-col lg:flex-row justify-center gap-8 my-10">
        <div className="w-34-percent">
          <img src={AboutImages.FirstRowA} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
        <div className="lg:w-7/12">
          <img src={AboutImages.FirstRowB} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
      </div>
      <div id="second-row" className="flex flex-col lg:flex-row justify-center gap-8 my-10">
        <div className="lg:w-7/12">
          <img src={AboutImages.SecondRowA} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
        <div className="w-34-percent">
          <img src={AboutImages.SecondRowB} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
      </div>
      <div id="third-row" className="flex flex-col lg:flex-row justify-center gap-8 my-10">
        <div className="w-34-percent">
          <img src={AboutImages.ThirdRowA} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
        <div className="lg:w-7/12">
          <img src={AboutImages.ThirdRowB} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
        </div>
      </div>
      <div id="fourth-row" className="flex justify-center gap-8 my-10">
        <img src={AboutImages.FourthRow} style={{ borderRadius: '3rem' }} alt="Ragam Kegiatan Bersama Pulih@thePeak" />
      </div>
    </div>
  );
}

function About() {
  return (
    <MainLayout>
      <Header page="About" />
      <AboutSection />
      <VisionMission />
      <TogetherSection />
      <Footer />
    </MainLayout>
  );
}

export default About;
