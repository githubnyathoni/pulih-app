import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PsychologistImages from '../images/psychologist';
import Header from '../components/Header';
import PsychologistCard from '../components/PsychologistCard';
import psychologistList from '../lib/psychologist_list';
import practionerList from '../lib/practioner_list';
import Footer from '../components/Footer';
import MainLayout from '../layout/MainLayout';
import ButtonIcon from '../components/ButtonIcon';

function AboutPsychologist() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center container mx-auto lg:h-screen lg:mt-8 mt-32">
      <div className="flex flex-col lg:flex-row w-9/12 gap-12 items-center">
        <img
          src={PsychologistImages.Psychologist}
          alt="ilustrasi psikolog terbaik"
          className="w-4/5 lg:w-1/2"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-3xl lg:text-5xl font-bold">
            {t('psychological.title')}
          </h1>
          <p className="text-secondary text-justify font-medium mt-8">
            {t('psychological.description')}
          </p>
        </div>
      </div>
    </div>
  );
}

function PsychologistSection() {
  const [index, setIndex] = useState(0);
  const currentPage = index + 1;
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = psychologistList.slice(indexOfFirstItem, indexOfLastItem);
  const { t } = useTranslation();

  return (
    <div className="w-10/12 lg:max-w-6xl mx-auto h-screen-header lg:mt-0 mt-8">
      <h1 className="text-primary text-2xl font-bold mb-4">{t('psychological.subcategory')}</h1>
      <div className="flex flex-wrap gap-y-8 lg:justify-start lg:gap-x-8 justify-between">
        {
          currentItems.map((item) => (
            <PsychologistCard
              photo={item.photo}
              alt={item.alt}
              name={item.name}
              skills={item.skills}
              slug={item.slug}
              link="psychologist"
              className="w-48-percent lg:w-64"
            />
          ))
        }
      </div>
      <div className="flex justify-end mt-8 gap-2">
        <ButtonIcon className={index <= 0 && 'cursor-not-allowed'} onClick={index > 0 ? (() => setIndex(index - 1)) : null}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1797 19L9.17997 11.9997L16.1797 5" stroke={index === 0 ? '#FFE7F9' : '#C01A78'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ButtonIcon>
        <ButtonIcon onClick={() => setIndex(0)}>
          <div className={`w-7 rounded-lg border-primary text-primary ${index === 0 && 'bg-pink'}`}>
            <h1>1</h1>
          </div>
        </ButtonIcon>
        <ButtonIcon onClick={() => setIndex(1)}>
          <div className={`w-7 rounded-lg border-primary text-primary ${index === 1 && 'bg-pink'}`}>
            <h1>2</h1>
          </div>
        </ButtonIcon>
        <ButtonIcon onClick={() => setIndex(2)}>
          <div className={`w-7 rounded-lg border-primary text-primary ${index === 2 && 'bg-pink'}`}>
            <h1>3</h1>
          </div>
        </ButtonIcon>
        <ButtonIcon className={index >= 2 && 'cursor-not-allowed'} onClick={index < 2 && (() => setIndex(index + 1))}>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17969 5L16.1794 12.0003L9.17969 19" stroke={index >= 2 ? '#FFE7F9' : '#C01A78'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </ButtonIcon>
      </div>
    </div>
  );
}

function PractionerSection() {
  const { t } = useTranslation();

  return (
    <div className="w-10/12 lg:max-w-6xl mx-auto mt-16 pb-16">
      <h1 className="text-primary text-2xl font-bold mb-4">{t('practioners.title')}</h1>
      <div className="flex flex-wrap justify-between lg:justify-start lg:gap-8">
        {
          practionerList.map((item) => (
            <PsychologistCard
              photo={item.photo}
              alt={item.alt}
              name={item.name}
              skills={item.skills}
              slug={item.slug}
              link="practioner"
              className="w-48-percent lg:w-64"
            />
          ))
        }
      </div>
    </div>
  );
}

function Psychologist() {
  return (
    <div>
      <MainLayout>
        <Header page="Psychologist" />
        <AboutPsychologist />
        <PsychologistSection />
        <PractionerSection />
        <Footer />
      </MainLayout>
    </div>
  );
}

export default Psychologist;
