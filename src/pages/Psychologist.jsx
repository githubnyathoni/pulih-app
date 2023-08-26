import React, { useState } from 'react';
import PsychologistImages from '../images/psychologist';
import Header from '../components/Header';
import PsychologistCard from '../components/PsychologistCard';
import psychologistList from '../lib/psychologist_list';
import practionerList from '../lib/practioner_list';
import Footer from '../components/Footer';
import MainLayout from '../layout/MainLayout';
import ButtonIcon from '../components/ButtonIcon';

function AboutPsychologist() {
  return (
    <div className="flex items-center justify-center container mx-auto h-screen-header">
      <div className="flex w-10/12 gap-12">
        <img
          src={PsychologistImages.Psychologist}
          alt="ilustrasi psikolog terbaik"
          style={{ width: '50%' }}
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-5xl font-bold">
            Psikolog Terbaik
          </h1>
          <p className="text-secondary text-justify mt-8">
            Psikolog profesional kami memiliki lisensi dan telah membantu ribuan permasalahan
            pribadi maupun keluarga. Keamanan dan kenyamanan anda adalah prioritas kami agar
            anda mendapatkan solusi terbaik dari yang ahli.
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

  return (
    <div className="max-w-6xl mx-auto h-screen-header">
      <h1 className="text-primary text-2xl font-bold mb-4">Psikolog</h1>
      <div className="flex flex-wrap justify-between gap-y-8">
        {
          currentItems.map((item) => (
            <PsychologistCard
              photo={item.photo}
              alt={item.alt}
              name={item.name}
              skills={item.skills}
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
  return (
    <div className="max-w-6xl mx-auto mt-16 pb-16">
      <h1 className="text-primary text-2xl font-bold mb-4">Praktisi Ahli</h1>
      <div className="flex flex-wrap gap-8">
        {
          practionerList.map((item) => (
            <PsychologistCard
              photo={item.photo}
              alt={item.alt}
              name={item.name}
              skills={item.skills}
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
