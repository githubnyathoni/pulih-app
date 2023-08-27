import React from 'react';
import { Link, useParams } from 'react-router-dom';
import psychologistList from '../lib/psychologist_list';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonIcon from '../components/ButtonIcon';

function PsychologistSection() {
  const { slug } = useParams();
  const psychologistIndex = psychologistList.findIndex((val) => val.slug === slug);
  const psychologist = psychologistList[psychologistIndex];
  const nextPsychologist = psychologistList[psychologistIndex + 1];
  const previousPsychologist = psychologistList[psychologistIndex - 1];

  return (
    <div className="container mx-auto my-20">
      <div className="flex">
        <div className="w-1/3">
          <img src={psychologist.photo} alt={psychologist.alt} className="rounded-2xl" />
        </div>
        <div className="w-2/3 ml-12">
          <h1 className="text-primary text-3xl font-bold">
            {psychologist.name}
          </h1>
          <h2 className="text-primary text-xl font-bold mt-6">Profil</h2>
          <p className="text-secondary leading-loose whitespace-pre-line text-justify mt-2">
            {psychologist.profile}
          </p>
          <h2 className="text-primary text-xl font-bold mt-6">Spesialisasi</h2>
          <div className="mt-2">
            {
              psychologist.skills_detail.map((skill) => (
                <div
                  key={skill}
                  className="inline-block m-1 rounded-full border border-rose-700 text-sm px-2 py-0.5"
                >
                  {skill}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center mt-20">
        {
          psychologistIndex > 0
          && (
          <Link to={`/psychologist/${previousPsychologist.slug}`}>
            <div className="flex items-center justify-end">
              <ButtonIcon>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.75 2.51562L5.24997 8.0156L10.75 13.5156" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-primary font-bold text-lg ml-1">Previous</span>
              </ButtonIcon>
            </div>
            <span>
              {previousPsychologist.name}
            </span>
          </Link>
          )
        }
        {
          psychologistIndex < 27
          && (
          <Link to={`/psychologist/${nextPsychologist.slug}`} className={`${psychologistIndex <= 0 && 'ml-24'}`}>
            <div className="flex items-center">
              <ButtonIcon>
                <span className="text-primary font-bold text-lg mr-1">Next</span>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.25 13.5156L10.75 8.01566L5.25 2.51563" stroke="#C01A78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonIcon>
            </div>
            <span>
              {nextPsychologist.name}
            </span>
          </Link>
          )
        }
      </div>
    </div>
  );
}

function PsychologistDetail() {
  return (
    <MainLayout>
      <Header page="Psychologist" />
      <PsychologistSection />
      <Footer />
    </MainLayout>
  );
}

export default PsychologistDetail;
