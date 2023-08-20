import React from 'react';
import PsychologistImages from '../images/psychologist';
import Header from '../components/Header';
import PsychologistCard from '../components/PsychologistCard';
import psychologistList from '../lib/psychologist_list';
import practionerList from '../lib/practioner_list';
import Footer from '../components/Footer';

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
  return (
    <div className="container mx-auto h-screen-header">
      <h1 className="text-primary text-2xl font-bold mb-4">Psikolog</h1>
      <div className="flex flex-wrap gap-8">
        {
          psychologistList.map((item) => (
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

function PractionerSection() {
  return (
    <div className="container mx-auto mt-16 pb-16">
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
      <Header page="Psychologist" />
      <AboutPsychologist />
      <PsychologistSection />
      <PractionerSection />
      <Footer />
    </div>
  );
}

export default Psychologist;
