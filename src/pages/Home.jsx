import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Images from '../images';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import PsychologistCard from '../components/PsychologistCard';
import ButtonIcon from '../components/ButtonIcon';

const quotes = require('../lib/quotes.json');

function QuoteCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteActive, setQuoteActive] = useState(quotes[currentIndex]);

  return (
    <div className="container flex justify-center items-center mx-auto h-screen-header">
      <div className="flex bg-pink w-9/12 py-16 px-12 rounded-3xl gap-4">
        {
          currentIndex === 0
            ? (
              <ButtonIcon
                className="w-12 cursor-not-allowed"
              >
                <img src={Images.LeftArrowInactive} alt="left arrow inactive" />
              </ButtonIcon>
            )
            : (
              <ButtonIcon
                className="w-12"
                onClick={() => {
                  setQuoteActive(quotes[currentIndex - 1]);
                  setCurrentIndex(currentIndex - 1);
                }}
              >
                <img src={Images.LeftArrowActive} alt="left arrow active" />
              </ButtonIcon>
            )
        }
        <div className="flex flex-col h-72 w-full justify-center">
          <p className="text-primary text-2xl font-bold">
            { quoteActive.quote }
          </p>
          <span className="text-primary mt-6">
            { quoteActive.speaker }
          </span>
          <Button className="mt-6">
            Konsultasi dengan kami
          </Button>
        </div>
        {
          currentIndex === 2
            ? (
              <ButtonIcon
                className="w-12 cursor-not-allowed"
              >
                <img src={Images.RightArrowInactive} alt="right arrow inactive" />
              </ButtonIcon>
            )
            : (
              <ButtonIcon
                className="w-12"
                onClick={() => {
                  setQuoteActive(quotes[currentIndex + 1]);
                  setCurrentIndex(currentIndex + 1);
                }}
              >
                <img src={Images.RightArrowActive} alt="right arrow active" />
              </ButtonIcon>
            )
        }
      </div>
    </div>
  );
}

function Home() {
  return (
    <MainLayout>
      <Header />
      <div className="bg-pink bg-shape-1">
        <div className="flex justify-between items-center container mx-auto h-screen-header gap-8">
          <div>
            <h1 className="text-7xl text-primary font-bold">Invest In Your Mental Health</h1>
            <p className="text-secondary mt-6">
              Dengan memelihara dan menjaga kesehatan mental diri sendiri sejak dini akan
              berdampak positif bagi kehidupan sehari-hari dalam keluarga,
              pendidikan, pekerjaan, dan hubungan sosial.
            </p>
          </div>
          <img src={Images.HomeImage1} alt="psychologist holding hand patient" width="50%" />
        </div>
      </div>
      <div className="bg-shape-2">
        <div className="container mx-auto flex justify-between gap-8 py-48">
          <img src={Images.HomeImage2} alt="pulih at the psychologists" width="40%" />
          <div className="mt-20">
            <h1 className="text-4xl text-primary font-bold">Tentang Pulih@thePeak</h1>
            <p className="text-secondary mt-6">
              Pulih@thePeak didirikan pada 21 April 2014, yang didedikasikan
              sebagaikeberlanjutan dari Yayasan Pulih yaitu organisasi nirlaba yang
              berkiprah sejak tahun 2002 dalam pemulihan trauma psikologis dan psikososial.
            </p>
            <Button className="mt-6">
              Ikuti lebih lanjut
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto h-screen-header">
        <h1 className="text-center text-primary text-4xl font-bold mt-6">Layanan Pulih@thePeak</h1>
        <div className="flex justify-between mt-16 px-12">
          <ServiceCard
            text="Konseling Individu"
            source={Images.IlustrasiIndividu}
            alt="ilustrasi konseling individu"
          />
          <ServiceCard
            text="Konseling Pasangan"
            source={Images.IlustrasiPasangan}
            alt="ilustrasi konseling pasangan"
          />
          <ServiceCard
            text="Konseling Keluarga"
            source={Images.IlustrasiKeluarga}
            alt="ilustrasi konseling keluarga"
          />
        </div>
        <div className="flex justify-between mt-16 px-12">
          <ServiceCard
            text="Pemeriksaan Psikologis"
            source={Images.IlustrasiPsikologis}
            alt="ilustrasi pemeriksaan psikologis"
          />
          <ServiceCard
            text="Pelatihan/Workshop"
            source={Images.IlustrasiWorkshop}
            alt="ilustrasi pelatihan atau workshop"
          />
          <ServiceCard
            text="Seminar/Webinar"
            source={Images.IlustrasiWebinar}
            alt="ilustrasi seminar atau webinar"
          />
        </div>
      </div>
      <div className="h-screen-header ml-20 mt-20 mr-8">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between mr-8">
            <div />
            <div className="">
              <h1 className="text-primary text-3xl font-bold">Psikolog Pulih@thePeak</h1>
              <h6 className="text-secondary my-4">
                Psikolog profesional kami selalu siap mendengarkan
                cerita anda dimana saja dan kapan saja.
              </h6>
              <Button className="w-max">
                Lihat Selengkapnya
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
                </svg>
              </Button>
            </div>
            <div className="flex gap-2">
              <ButtonIcon className="w-12">
                <img src={Images.LeftArrowInactive} alt="left arrow" />
              </ButtonIcon>
              <ButtonIcon className="w-12">
                <img src={Images.RightArrowActive} alt="right arrow" />
              </ButtonIcon>
            </div>
          </div>
          <div className="flex gap-2">
            <PsychologistCard
              photo={Images.Livia}
              alt="ibu livia"
              name="Livia Istania Dea Flavia
              Iskandar, S.Psi., Psikolog"
              skills={['Bipolar', 'Derpresi', 'Borderline', 'Anxiety', 'Youth', 'Work-family Balance', 'Gender-based Violence', '+1']}
            />
            <PsychologistCard
              photo={Images.Livia}
              alt="ibu livia"
              name="Livia Istania Dea Flavia
              Iskandar, S.Psi., Psikolog"
              skills={['Bipolar', 'Derpresi', 'Borderline', 'Anxiety', 'Youth', 'Work-family Balance', 'Gender-based Violence', '+1']}
            />
            <PsychologistCard
              photo={Images.Livia}
              alt="ibu livia"
              name="Livia Istania Dea Flavia
              Iskandar, S.Psi., Psikolog"
              skills={['Bipolar', 'Derpresi', 'Borderline', 'Anxiety', 'Youth', 'Work-family Balance', 'Gender-based Violence', '+1']}
            />
          </div>
        </div>
      </div>
      <QuoteCard />
    </MainLayout>
  );
}

export default Home;
