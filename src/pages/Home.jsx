/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Images from '../images';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import PsychologistCard from '../components/PsychologistCard';
import ButtonIcon from '../components/ButtonIcon';
import Footer from '../components/Footer';
import psychologistList from '../lib/psychologist_list';

const quotes = require('../lib/quotes.json');

function QuoteCard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteActive, setQuoteActive] = useState(quotes[currentIndex]);

  return (
    <div className="container flex justify-center items-center mx-auto h-screen-header">
      <div className="flex bg-pink w-10/12 py-16 px-12 rounded-3xl gap-4 bg-shape-quote">
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
        <div className="flex flex-col h-72 w-10/12 justify-center">
          <p className="text-primary text-justify text-2xl font-bold">
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

function FaqCard() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="container flex flex-col justify-center items-center mx-auto h-screen-header">
      <h1 className="text-3xl text-primary font-bold mb-8">Apa yang bisa kami bantu?</h1>
      <div className="w-9/12">
        <div>
          <div
            className="flex justify-between items-center rounded-t-3xl bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 0 ? null : 0)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary">
              Bagaimana cara melakukan pendaftaran konseling di Pulih@thePeak?
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md ${selectedQuestion === 0 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 px-8 text-secondary border-b-third transition-all duration-300 ${selectedQuestion === 0 ? 'visible h-18 py-6' : 'invisible h-0'}`}>
            Silahkan Whatsapp ke nomor 083128769871
          </div>
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 1 ? null : 1)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary">
              Jenis konsultasi apa saja yang disediakan oleh Pulih@thePeak?
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md ${selectedQuestion === 1 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 px-8 text-secondary border-b-third transition-all duration-300 ${selectedQuestion === 1 ? 'visible h-22 py-4' : 'invisible h-0'}`}>
            Konseling psikologis dan psikoterapi (individual dan kelompok), Konseling pra-nikah,
            Konseling perkawinan Konseling keluarga, Konseling keuangan keluarga, Konsultasi karir.
          </div>
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 2 ? null : 2)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary">
              Apakah konseling di Pulih@thePeak dapat dilakukan secara offline?
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md ${selectedQuestion === 2 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 px-8 text-secondary border-b-third transition-all duration-300 ${selectedQuestion === 2 ? 'visible h-20 py-4' : 'invisible h-0'}`}>
            Kegiatan konseling dapat dilakukan secara online (Zoom/Chat) dan offline.
            Konseling via “Chat” hanya dapat dilakukan sesuai dengan mendapat persetujuan
            dari psikolog.
          </div>
        </div>
        <div>
          <div
            className={`flex justify-between items-center bg-pink py-6 px-8 shadow-lg ${selectedQuestion !== 3 && 'rounded-b-3xl'}`}
            onClick={() => setSelectedQuestion(selectedQuestion === 3 ? null : 3)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary">
              Berapa lama sesi konseling dilakukan?
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md ${selectedQuestion === 3 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`rounded-b-3xl bg-slate-50 px-8 text-secondary border-b-third transition-all duration-300 ${selectedQuestion === 3 ? 'visible h-14 py-4' : 'invisible h-0'}`}>
            Kegiatan konseling dilakukan selama 75 menit.
          </div>
        </div>
      </div>
    </div>
  );
}

function InstagramCard() {
  return (
    <div>
      <h1 className="text-primary text-3xl font-bold">
        Temukan kami di Instagram
      </h1>
      <div className="flex my-4 gap-4">
        <img src={Images.Instagram1} alt="post of instagram" width="128px" />
        <img src={Images.Instagram2} alt="post of instagram" width="128px" />
        <img src={Images.Instagram3} alt="post of instagram" width="128px" />
      </div>
      <Link to="https://www.instagram.com/pulihatp/" target="_blank">
        <Button>
          Lihat konten lainnya
          <b>@pulihatp</b>
        </Button>
      </Link>
    </div>
  );
}

function MerchandiseCard() {
  return (
    <div className="flex flex-col justify-center bg-primary w-1/3 h-80 p-12 rounded-3xl bg-merchandise">
      <h1 className="text-white font-bold text-3xl">Merchandise</h1>
      <h1 className="text-white font-bold text-3xl">Pulih@thePeak</h1>
      <Link to="/merchandise">
        <Button className="bg-pink text-primary mt-4">
          Lihat Produk
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3 20.2856C11.1167 20.1023 11.0207 19.869 11.012 19.5856C11.0033 19.3023 11.091 19.069 11.275 18.8856L16.175 13.9856H5C4.71667 13.9856 4.479 13.8896 4.287 13.6976C4.095 13.5056 3.99934 13.2683 4 12.9856C4 12.7023 4.096 12.4646 4.288 12.2726C4.48 12.0806 4.71734 11.985 5 11.9856H16.175L11.275 7.08564C11.0917 6.90231 11.004 6.66898 11.012 6.38564C11.02 6.10231 11.116 5.86898 11.3 5.68564C11.4833 5.50231 11.7167 5.41064 12 5.41064C12.2833 5.41064 12.5167 5.50231 12.7 5.68564L19.3 12.2856C19.4 12.369 19.471 12.4733 19.513 12.5986C19.555 12.724 19.5757 12.853 19.575 12.9856C19.575 13.119 19.5543 13.244 19.513 13.3606C19.4717 13.4773 19.4007 13.5856 19.3 13.6856L12.7 20.2856C12.5167 20.469 12.2833 20.5606 12 20.5606C11.7167 20.5606 11.4833 20.469 11.3 20.2856Z" fill="#C01A78" />
          </svg>
        </Button>
      </Link>
    </div>
  );
}

function CloserSection() {
  return (
    <div className="bg-shape-closer">
      <div className="container flex justify-center items-center mx-auto h-screen-header">
        <div className="flex justify-around w-full">
          <InstagramCard />
          <MerchandiseCard />
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <MainLayout>
      <Header page="Home" />
      <div className="bg-pink bg-shape-1">
        <div className="flex justify-between items-center container mx-auto h-screen-header gap-16">
          <div>
            <h1 className="text-7xl text-primary font-bold">Invest In Your Mental Health</h1>
            <p className="text-secondary mt-6">
              Pulih@thePeak lebih mendukung tindakan pencegahan khususnya dalam kesehatan
              mental. Salah satu caranya dengan investasi kesehatan mental untuk diri sendiri
              dan keluarga. Dengan memelihara dan menjaga kesehatan mental diri sendiri sejak
              dini akan berdampak positif bagi kehidupan sehari-hari dalam keluarga, pendidikan,
              pekerjaan, dan hubungan sosial.
            </p>
            <p className="text-secondary mt-2">
              #investinyourmentalhealth
            </p>
          </div>
          <img src={Images.HomeImage1} alt="psychologist holding hand patient" width="50%" />
        </div>
      </div>
      <div className="bg-shape-2">
        <div className="container mx-auto flex justify-between gap-12 py-48">
          <img src={Images.HomeImage2} alt="pulih at the psychologists" width="40%" />
          <div className="mt-20">
            <h1 className="text-4xl text-primary font-bold">Tentang Pulih@thePeak</h1>
            <p className="text-secondary mt-6">
              Pulih@thePeak didirikan pada 21 April 2014, yang didedikasikan
              sebagaikeberlanjutan dari Yayasan Pulih yaitu organisasi nirlaba yang
              berkiprah sejak tahun 2002 dalam pemulihan trauma psikologis dan psikososial.
            </p>
            <Link to="/about">
              <Button className="mt-6">
                Ikuti lebih lanjut
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
                </svg>
              </Button>
            </Link>
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
      <div className="container-xl mx-auto h-screen-header mt-20">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between mr-8 w-4/12">
            <div />
            <div className="">
              <h1 className="text-primary text-3xl font-bold">Psikolog Pulih@thePeak</h1>
              <h6 className="text-secondary my-4">
                Psikolog profesional kami selalu siap mendengarkan
                cerita anda dimana saja dan kapan saja.
              </h6>
              <Link to="/psychologist">
                <Button className="w-max">
                  Lihat Selengkapnya
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div className="flex gap-2 mb-4">
              {
                currentIndex > 0
                  ? (
                    <ButtonIcon className="w-12" onClick={previousSlide}>
                      <img
                        src={Images.LeftArrowActive}
                        alt="left arrow"
                      />
                    </ButtonIcon>
                  )
                  : (
                    <ButtonIcon className="w-12 cursor-not-allowed">
                      <img
                        src={Images.LeftArrowInactive}
                        alt="left arrow"
                      />
                    </ButtonIcon>
                  )
              }
              {
                currentIndex < 8
                  ? (
                    <ButtonIcon className="w-12" onClick={nextSlide}>
                      <img src={Images.RightArrowActive} alt="right arrow" />
                    </ButtonIcon>
                  )
                  : (
                    <ButtonIcon className="w-12 cursor-not-allowed">
                      <img src={Images.RightArrowInactive} alt="right arrow" />
                    </ButtonIcon>
                  )
              }
            </div>
          </div>
          <div className="w-8/12 overflow-hidden">
            <div
              className="flex transition ease-out duration-40"
              style={{ transform: `translateX(-${(currentIndex * 100) - (currentIndex / 2)}%)` }}
            >
              <div className="flex p-4 gap-5">
                {
                  psychologistList.map((item) => (
                    <PsychologistCard
                      photo={item.photo}
                      alt={item.alt}
                      name={item.name}
                      skills={item.skills}
                      slug={item.slug}
                      link="psychologist"
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      <QuoteCard />
      <FaqCard />
      <CloserSection />
      <Footer />
    </MainLayout>
  );
}

export default Home;
