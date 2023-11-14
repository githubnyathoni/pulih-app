import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutImages from '../images/about';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="mt-20">
      <img src={AboutImages.Squad} alt="pulih at the peak squad" className="duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up" />
      <div className="flex flex-col items-start px-8 lg:items-center bg-pink bg-about py-12">
        <h1
          className="text-primary text-3xl lg:text-5xl font-bold duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
        >
          {t('about.title')}
        </h1>
        <p
          className="text-secondary text-justify lg:text-center lg:w-6/12 py-6 font-medium duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
        >
          {t('about.description')}
        </p>
      </div>
    </div>
  );
}

function Vision() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center pt-12 lg:flex-row">
      <img src={AboutImages.Vision} alt="ilustrasi visi" className="w-3/5 lg:w-1/3" />
      <div className="flex flex-col justify-center lg:pl-8 mt-8">
        <h1 className="text-primary text-2xl font-bold">{t('about.vision.title')}</h1>
        <p className="text-secondary text-justify font-medium mt-2">
          {t('about.vision.description')}
        </p>
      </div>
    </div>
  );
}

function Mission() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse items-center lg:pb-12 lg:flex-row">
      <div className="flex flex-col justify-center pr-8 py-8 lg:py-0">
        <h1 className="text-primary text-2xl font-bold">{t('about.mission.title')}</h1>
        <p className="text-secondary text-justify font-medium mt-2">
          {t('about.mission.description')}
        </p>
      </div>
      <img src={AboutImages.Mission} alt="ilustrasi misi" className="w-3/5 lg:w-1/3" />
    </div>
  );
}

function VisionMission() {
  return (
    <div className="container mx-auto flex flex-col h-screen-header w-10/12 lg:w-8/12 justify-center gap-12 max-w-screen-lg">
      <Vision />
      <Mission />
    </div>
  );
}

function TogetherSection() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-primary lg:text-center text-2xl lg:text-5xl font-bold">
        {t('about.together')}
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
    </div>
  );
}

function About() {
  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('translate-y-0', 'opacity-100');
        entry.target.classList.remove('translate-y-12', 'opacity-0');
      }
    });
  }

  const observer = new IntersectionObserver(callback);

  useEffect(() => {
    const replacers = document.querySelectorAll('.animation-slide-up');
    for (let i = 0; i < replacers.length; i += 1) {
      observer.observe(replacers[i]);
    }
  }, []);

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
