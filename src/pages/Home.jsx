/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
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

function MainHomeSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-pink bg-shape-1">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center container lg:max-w-4xl xl:max-w-5xl xl-2:max-w-7xl mx-auto lg:h-screen h-auto lg:gap-16 lg:overflow-visible overflow-hidden">
        <div className="lg:pt-12 pt-8 w-9/12 lg:w-full">
          <h1
            className="text-4xl lg:text-5xl xl:text-7xl text-primary block font-bold duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
          >
            Invest In Your
          </h1>
          <h1
            className="text-4xl lg:text-5xl xl:text-7xl text-primary font-bold duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
          >
            Mental Health
          </h1>
          <p
            className="text-secondary text-justify font-medium mt-6 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
          >
            {t('home.subtagline')}
          </p>
          <p
            className="text-secondary font-medium mt-2 mb-12 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up"
          >
            #investinyourmentalhealth
          </p>
        </div>
        <img
          src={Images.HomeImage1}
          alt="psychologist holding hand patient"
          className="w-4/6 sm:w-1/2 w-42-percent lg:mt-0 mt-24 duration-700 transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up relative left-10"
        />
      </div>
    </div>
  );
}

function AboutSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-shape-2">
      <div className="container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between lg:gap-12 lg:pt-36 lg:pb-20 py-16">
        <img src={Images.HomeImage2} alt="pulih at the psychologists" className="lg:block hidden lg:w-2/5 w-9/12" />
        <img src={Images.About} alt="pulih at the psychologists" className="lg:hidden rounded-3xl w-9/12" />
        <div className="lg:mt-20 mt-10 w-9/12 lg:w-full">
          <h1 className="lg:text-4xl text-2xl text-primary font-bold">{t('home.about.title')}</h1>
          <p className="text-secondary text-justify font-medium mt-6">
            {t('home.about.description')}
          </p>
          <Link to="/about">
            <Button className="mt-6">
              {t('home.about.more')}
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function PsychologistSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const windowWidth = useRef(window.innerWidth);
  const [indexLimit, setIndexLimit] = useState(2);

  const previousSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    if (windowWidth.current <= 1350) {
      setIndexLimit(4);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === indexLimit) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container-xl mx-auto my-24 w-full lg:max-w-4xl xl-2:max-w-7xl">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex lg:flex-col justify-between lg:mr-8 w-9/12 mx-auto lg:w-4/12">
          <div />
          <div className="">
            <h1 className="text-primary lg:text-3xl text-2xl font-bold">{t('home.psychological.title')}</h1>
            <h6 className="text-secondary text-justify font-medium my-4">
              {t('home.psychological.description')}
            </h6>
            <Link to="/psychologs" className="hidden lg:block">
              <Button className="w-max">
                {t('home.psychological.more')}
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="hidden lg:flex gap-2 mb-4">
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
              currentIndex < indexLimit
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
        <div className="w-full lg:w-8/12 pl-8 lg:ml-0 overflow-hidden">
          <div
            className="flex transition ease-out duration-1000 scroll-animation"
            style={{ transform: `translateX(-${(currentIndex * (107 - currentIndex)) - (currentIndex / 2)}%)` }}
          >
            <div className="flex py-4 gap-5">
              {
                psychologistList.slice(0, 9).map((item) => (
                  <PsychologistCard
                    photo={item.photo}
                    alt={item.alt}
                    name={item.name}
                    slug={item.slug}
                    link="psychologs"
                    className="w-64"
                  />
                ))
              }
            </div>
          </div>
        </div>
        <Link to="/psychologs" className="ml-12 mt-2 lg:hidden">
          <Button className="w-max">
            {t('home.psychological.more')}
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.21443 15.2405C8.0311 15.0571 7.9351 14.8238 7.92643 14.5405C7.91777 14.2571 8.00543 14.0238 8.18943 13.8405L13.0894 8.94048H1.91443C1.6311 8.94048 1.39343 8.84448 1.20143 8.65248C1.00943 8.46048 0.913766 8.22315 0.914432 7.94048C0.914432 7.65715 1.01043 7.41948 1.20243 7.22748C1.39443 7.03548 1.63177 6.93981 1.91443 6.94048H13.0894L8.18943 2.04048C8.0061 1.85714 7.91843 1.62381 7.92643 1.34048C7.93443 1.05715 8.03043 0.823811 8.21443 0.640478C8.39777 0.457145 8.6311 0.365479 8.91443 0.365479C9.19777 0.365479 9.4311 0.457145 9.61443 0.640478L16.2144 7.24048C16.3144 7.32381 16.3854 7.42814 16.4274 7.55348C16.4694 7.67881 16.4901 7.80781 16.4894 7.94048C16.4894 8.07381 16.4688 8.19881 16.4274 8.31548C16.3861 8.43215 16.3151 8.54048 16.2144 8.64048L9.61443 15.2405C9.4311 15.4238 9.19777 15.5155 8.91443 15.5155C8.6311 15.5155 8.39777 15.4238 8.21443 15.2405Z" fill="#FFE7F9" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}
function QuoteCard() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container flex justify-center items-center mx-auto my-24">
      <div className="flex bg-pink w-full lg:w-10/12 py-16 px-12 lg:rounded-3xl gap-4 bg-shape-quote justify-center">
        {
          currentIndex === 0
            ? (
              <ButtonIcon
                className="w-12 cursor-not-allowed hidden lg:block"
              >
                <img src={Images.LeftArrowInactive} alt="left arrow inactive" />
              </ButtonIcon>
            )
            : (
              <ButtonIcon
                className="w-12 hidden lg:block"
                onClick={() => {
                  setCurrentIndex(currentIndex - 1);
                }}
              >
                <img src={Images.LeftArrowActive} alt="left arrow active" />
              </ButtonIcon>
            )
        }
        <div className="flex flex-col h-72 md:h-60 lg:h-96 xl:h-80 w-250 sm:w-500 md:w-600 xl:w-800 justify-center">
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-all ease-in-out duration-1000"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                <div className="flex flex-col w-250 sm:w-500 md:w-600 xl:w-800">
                  <p className="text-primary lg:text-justify text-sm lg:text-2xl lg:font-bold">
                    { t('home.quotes.supeli') }
                  </p>
                  <span className="text-primary text-sm lg:text-base font-medium mt-6">
                    Abas Supeli, S.Psi, M.Sc, Ph.D, Psikolog
                  </span>
                </div>
                <div className="flex flex-col w-250 sm:w-500 md:w-600 xl:w-800">
                  <p className="text-primary lg:text-justify text-sm lg:text-2xl lg:font-bold">
                    { t('home.quotes.soraya') }
                  </p>
                  <span className="text-primary text-sm lg:text-base font-medium mt-6">
                    Soraya Salim, S.Psi., Psikolog
                  </span>
                </div>
                <div className="flex flex-col w-250 sm:w-500 md:w-600 xl:w-800">
                  <p className="text-primary lg:text-justify text-sm lg:text-2xl lg:font-bold">
                    { t('home.quotes.retno') }
                  </p>
                  <span className="text-primary text-sm lg:text-base font-medium mt-6">
                    Astarini Retno (Ajeng Raviando), Psikolog
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 lg:hidden mt-4">
            <div
              className={`rounded-full w-2 h-2 ${currentIndex === 0 ? 'bg-primary' : 'border-sm-primary'}`}
              onClick={() => { setCurrentIndex(0); }}
              role="button"
              tabIndex={0}
            />
            <div
              className={`rounded-full w-2 h-2 ${currentIndex === 1 ? 'bg-primary' : 'border-sm-primary'}`}
              onClick={() => { setCurrentIndex(1); }}
              role="button"
              tabIndex={0}
            />
            <div
              className={`rounded-full w-2 h-2 ${currentIndex === 2 ? 'bg-primary' : 'border-sm-primary'}`}
              onClick={() => { setCurrentIndex(2); }}
              role="button"
              tabIndex={0}
            />
          </div>
          <Link to="https://api.whatsapp.com/send/?phone=6285103209515" target="_blank">
            <Button className="mt-6 w-max">
              {t('home.quotes.consult')}
            </Button>
          </Link>
        </div>
        {
          currentIndex === 2
            ? (
              <ButtonIcon
                className="w-12 cursor-not-allowed hidden lg:block"
              >
                <img src={Images.RightArrowInactive} alt="right arrow inactive" />
              </ButtonIcon>
            )
            : (
              <ButtonIcon
                className="w-12 hidden lg:block"
                onClick={() => {
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
  const { t } = useTranslation();

  return (
    <div className="container flex flex-col justify-center items-center mx-auto my-24">
      <h1 className="text-2xl lg:text-3xl text-primary font-bold mb-8">{t('home.faq.title')}</h1>
      <div className="w-full lg:w-9/12">
        <div>
          <div
            className="flex justify-between items-center lg:rounded-t-3xl bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 0 ? null : 0)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary font-medium">
              {t('home.faq.question_1')}
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md transition-all duration-700 ${selectedQuestion === 0 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 px-8 text-secondary font-medium border-b-third overflow-hidden transition-all duration-700 ${selectedQuestion === 0 ? 'p-4 sm:h-20 lg:h-14' : 'p-0 h-0'}`}>
            {t('home.faq.answer_1')}
          </div>
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 1 ? null : 1)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary font-medium">
              {t('home.faq.question_2')}
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md transition-all duration-700 ${selectedQuestion === 1 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 pl-8 pr-16 text-secondary font-medium border-b-third overflow-hidden  transition-all duration-700 ${selectedQuestion === 1 ? 'p-4 sm:h-32 md:h-28' : 'p-0 h-0'}`}>
            {t('home.faq.answer_2')}
          </div>
        </div>
        <div>
          <div
            className="flex justify-between items-center bg-pink py-6 px-8 border-b-third shadow-lg"
            onClick={() => setSelectedQuestion(selectedQuestion === 2 ? null : 2)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary font-medium">
              {t('home.faq.question_3')}
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md transition-all duration-700 ${selectedQuestion === 2 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`bg-slate-50 pl-8 pr-16 text-secondary font-medium border-b-third overflow-hidden transition-all duration-700 ${selectedQuestion === 2 ? 'p-4 sm:h-28 lg:h-20' : 'h-0'}`}>
            {t('home.faq.answer_3')}
          </div>
        </div>
        <div>
          <div
            className={`flex justify-between items-center bg-pink py-6 px-8 shadow-lg ${selectedQuestion !== 3 && 'lg:rounded-b-3xl'}`}
            onClick={() => setSelectedQuestion(selectedQuestion === 3 ? null : 3)}
            role="button"
            tabIndex={0}
          >
            <h6 className="text-primary font-medium">
              {t('home.faq.question_4')}
            </h6>
            <ButtonIcon>
              <img
                src={Images.DownArrow}
                alt="down arrow"
                className={`img-md transition-all duration-700 ${selectedQuestion === 3 && 'rotate-180'}`}
              />
            </ButtonIcon>
          </div>
          <div className={`lg:rounded-b-3xl bg-slate-50 px-8 text-secondary font-medium overflow-hidden transition-all duration-700 ${selectedQuestion === 3 ? 'p-4 h-18 sm:h-14 border-b-third' : 'h-0'}`}>
            {t('home.faq.answer_4')}
          </div>
        </div>
      </div>
    </div>
  );
}

// function InstagramCard() {
//   const { t } = useTranslation();
//   const token = `IGQWRQaUZAaSFo0MEJBQzNadjB4Q21QYi1xRVJLQUJXYXhhbHFSOUd4U0FOUld3Y1
//   ZAuRWRvYkZAiblJtdXdZALUIxQ0FsS2ZAaUWZAHdXlWRllJSTV
//   CQ1J6NGR2aGl2NW50V2lRLVVGSlBSNWFvY1R6MFhuUUp5SDFwcjQZD`;
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch(`https://graph.instagram.com/v18.0/me/media?fields=id,caption,media_url,permalink,thumbnail_url,media_type&access_token=${token}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data.data);
//       })
//       .catch(() => {
//       });
//   }, []);

//   return (
//     <div className="lg:w-1/3 mx-auto lg:m-0">
//       <h1 className="text-primary text-xl lg:text-3xl font-bold">
//         {t('home.instagram.title')}
//       </h1>
//       <div className="flex my-4 gap-4">
//         {
//           posts.slice(0, 3).map((post) => (
//             <Link target="_blank" to={post.permalink}>
//                 <img src={
//                 post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url
//               } alt="post of instagram" className="w-24 h-24 lg:h-32 lg:w-32" />
//             </Link>
//           ))
//         }
//       </div>
//       <Link to="https://www.instagram.com/pulihatp/" target="_blank">
//         <Button>
//           {t('home.instagram.button')}
//           <b>@pulihatp</b>
//         </Button>
//       </Link>
//     </div>
//   );
// }

function MerchandiseCard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center bg-primary lg:w-1/3 h-80 p-12 lg:rounded-3xl bg-merchandise w-full">
      <h1 className="text-white font-bold text-3xl w-1/2">{t('home.merchandise.title')}</h1>
      <Link to="/merchandise">
        <Button className="bg-pink text-primary mt-4">
          {t('home.merchandise.button')}
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
      <div className="container flex justify-center items-center lg:mx-auto lg:my-24">
        <div className="flex flex-col lg:flex-row justify-evenly w-full gap-12">
          {/* <InstagramCard /> */}
          <MerchandiseCard />
        </div>
      </div>
    </div>
  );
}

function Home() {
  const { t } = useTranslation();

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
      <Header page="Home" />
      <MainHomeSection />
      <AboutSection />
      <div className="container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <h1 className="text-center text-primary text-2xl lg:text-4xl font-bold mt-6">{t('home.service.title')}</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-12 px-12 lg:gap-16">
          <ServiceCard
            text={t('home.service.individual')}
            source={Images.IlustrasiIndividu}
            alt="ilustrasi konseling individu"
          />
          <ServiceCard
            text={t('home.service.couples')}
            source={Images.IlustrasiPasangan}
            alt="ilustrasi konseling pasangan"
          />
          <ServiceCard
            text={t('home.service.family')}
            source={Images.IlustrasiKeluarga}
            alt="ilustrasi konseling keluarga"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:mt-12 px-12 lg:gap-16">
          <ServiceCard
            text={t('home.service.psychological')}
            source={Images.IlustrasiPsikologis}
            alt="ilustrasi pemeriksaan psikologis"
          />
          <ServiceCard
            text={t('home.service.training')}
            source={Images.IlustrasiWorkshop}
            alt="ilustrasi pelatihan atau workshop"
          />
          <ServiceCard
            text={t('home.service.webinars')}
            source={Images.IlustrasiWebinar}
            alt="ilustrasi seminar atau webinar"
          />
        </div>
      </div>
      <PsychologistSection />
      <QuoteCard />
      <FaqCard />
      <CloserSection />
      <Footer />
    </MainLayout>
  );
}

export default Home;
