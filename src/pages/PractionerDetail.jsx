import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import practionerList from '../lib/practioner_list';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonIcon from '../components/ButtonIcon';

function PractionerSection() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const practionerIndex = practionerList.findIndex((val) => val.slug === slug);
  const practioner = practionerList[practionerIndex];
  const nextPractioner = practionerList[practionerIndex + 1];
  const previousPractioner = practionerList[practionerIndex - 1];
  const translatedPractioner = t(`practioners.${practioner.slug}`, { returnObjects: true });

  return (
    <div className="container lg:max-w-4xl xl:max-w-6xl mx-auto my-20 mt-36">
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8">
        <div className="lg:w-1/3 w-1/2">
          <img src={practioner.photo} alt={practioner.alt} className="rounded-2xl" />
        </div>
        <div className="w-2/3 lg:ml-12">
          <h1 className="text-primary lg:text-3xl text-2xl font-bold">
            {practioner.name}
          </h1>
          <h2 className="text-primary text-xl font-bold mt-6">{t('psychological.profile')}</h2>
          <p className="text-secondary leading-loose whitespace-pre-line text-justify font-medium mt-2">
            {translatedPractioner.profile}
          </p>
          <h2 className="text-primary text-xl font-bold mt-6">{t('psychological.specialization')}</h2>
          <ul className="mt-2 lg:ml-0 ml-2 list-disc">
            {
              translatedPractioner.skills_detail.map((skill) => (
                <li
                  key={skill}
                  className="lg:inline-block m-1 rounded-full lg:border lg:border-rose-700 text-sm lg:px-2 py-0.5"
                >
                  {skill}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center mt-20">
        {
          practionerIndex > 0
            ? (
              <Link to={`/practioners/${previousPractioner.slug}`} className="w-1/2">
                <div className="flex items-center justify-end">
                  <ButtonIcon>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.75 2.51562L5.24997 8.0156L10.75 13.5156" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-primary font-bold text-lg ml-1">Previous</span>
                  </ButtonIcon>
                </div>
                <span className="flex justify-end">
                  {previousPractioner.name}
                </span>
              </Link>
            )
            : (
              <div className="w-1/2" />
            )
        }
        {
          practionerIndex < 1
            ? (
              <Link to={`/practioners/${nextPractioner.slug}`} className="w-1/2">
                <div className="flex items-center">
                  <ButtonIcon>
                    <span className="text-primary font-bold text-lg mr-1">Next</span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.25 13.5156L10.75 8.01566L5.25 2.51563" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </ButtonIcon>
                </div>
                <span>
                  {nextPractioner.name}
                </span>
              </Link>
            )
            : (
              <div className="w-1/2" />
            )
        }
      </div>
    </div>
  );
}

function PractionerDetail() {
  return (
    <MainLayout>
      <Header page="Psychologist" />
      <PractionerSection />
      <Footer />
    </MainLayout>
  );
}

export default PractionerDetail;
