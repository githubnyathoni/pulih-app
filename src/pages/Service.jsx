import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import ServiceImages from '../images/service';
import Images from '../images';
import ButtonIcon from '../components/ButtonIcon';
import Footer from '../components/Footer';

function ServiceSection() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center container mx-auto lg:h-screen lg:mt-8 mt-32">
      <div className="flex flex-col lg:flex-row items-center w-10/12 gap-12">
        <img src={ServiceImages.Service} alt="layanan pulih@thepeak" className="w-4/5 lg:w-1/2 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up" />
        <div className="flex flex-col justify-center">
          <h1 className="text-primary text-3xl lg:text-5xl font-bold duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up">
            {t('services.title')}
          </h1>
          <p className="text-secondary text-justify font-medium mt-8 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out animation-slide-up">
            {t('services.description')}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCategories() {
  const { t } = useTranslation();
  const [selectedCategories, setSelectedCategories] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedCategories === 5) {
        setSelectedCategories(0);
      } else {
        setSelectedCategories(selectedCategories + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedCategories]);

  return (
    <div className="bg-shape-service">
      <div className="flex flex-col items-center justify-center container mx-auto lg:py-24 py-10 w-10/12 lg:w-full">
        <h1 className="text-primary hidden lg:block lg:text-5xl font-bold">
          {t('services.categories.title')}
        </h1>
        <h1 className="text-primary block lg:hidden text-2xl font-bold">
          {t('services.categories.title-mobile-1')}
        </h1>
        <h1 className="text-primary block lg:hidden text-2xl font-bold">
          {t('services.categories.title-mobile-2')}
        </h1>
        <p className="text-secondary font-medium mt-6">
          {t('services.categories.description')}
        </p>
        <div className="flex mt-16">
          <div
            className={`${selectedCategories === 0 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} border-left-category py-4 px-6 duration-200 transition-all`}
            onClick={() => setSelectedCategories(0)}
            onKeyDown={() => setSelectedCategories(0)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.individual.title')}
          </div>
          <div
            className={`${selectedCategories === 1 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} py-4 px-6 duration-200 transition-all lg:rounded-none rounded-full`}
            onClick={() => setSelectedCategories(1)}
            onKeyDown={() => setSelectedCategories(1)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.couples.title')}
          </div>
          <div
            className={`${selectedCategories === 2 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} py-4 px-6 duration-200 transition-all lg:rounded-none rounded-full`}
            onClick={() => setSelectedCategories(2)}
            onKeyDown={() => setSelectedCategories(2)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.family.title')}
          </div>
          <div
            className={`${selectedCategories === 3 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} py-4 px-6 duration-200 transition-all lg:rounded-none rounded-full`}
            onClick={() => setSelectedCategories(3)}
            onKeyDown={() => setSelectedCategories(3)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.psychological.title')}
          </div>
          <div
            className={`${selectedCategories === 4 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} py-4 px-6 duration-200 transition-all lg:rounded-none rounded-full`}
            onClick={() => setSelectedCategories(4)}
            onKeyDown={() => setSelectedCategories(4)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.workshop.title')}
          </div>
          <div
            className={`${selectedCategories === 5 ? 'services-category lg:text-white text-primary font-bold' : 'bg-pink text-secondary lg:block hidden'} border-right-category py-4 px-6 duration-200 transition-all`}
            onClick={() => setSelectedCategories(5)}
            onKeyDown={() => setSelectedCategories(5)}
            role="button"
            tabIndex={0}
          >
            {t('services.categories.webinars.title')}
          </div>
        </div>
        <div className="flex lg:justify-between justify-center max-w-screen-lg w-full lg:mt-24">
          {
            selectedCategories > 0
              ? (
                <ButtonIcon className="w-12 lg:block hidden" onClick={() => setSelectedCategories(selectedCategories - 1)}>
                  <img src={Images.LeftArrowActive} alt="left arrow active" width="32px" />
                </ButtonIcon>
              )
              : (
                <ButtonIcon className="w-12 cursor-not-allowed lg:block hidden">
                  <img src={Images.LeftArrowInactive} alt="left arrow inactive" width="32px" />
                </ButtonIcon>
              )
          }
          <div className="flex lg:flex-row flex-col-reverse items-center w-250 sm:w-500 md:w-600 lg:w-750 w-full">
            <div className="flex lg:hidden mt-4">
              {
                selectedCategories > 0
                  ? (
                    <ButtonIcon className="w-12 lg:hidden block" onClick={() => setSelectedCategories(selectedCategories - 1)}>
                      <img src={Images.LeftArrowActive} alt="left arrow active" width="32px" />
                    </ButtonIcon>
                  )
                  : (
                    <ButtonIcon className="w-12 cursor-not-allowed lg:hidden block">
                      <img src={Images.LeftArrowInactive} alt="left arrow inactive" width="32px" />
                    </ButtonIcon>
                  )
              }
              {
                selectedCategories < 5
                  ? (
                    <ButtonIcon className="w-12 lg:hidden block" onClick={() => setSelectedCategories(selectedCategories + 1)}>
                      <img src={Images.RightArrowActive} alt="right arrow active" width="32px" />
                    </ButtonIcon>
                  )
                  : (
                    <ButtonIcon className="w-12 cursor-not-allowed lg:hidden block">
                      <img src={Images.RightArrowInactive} alt="right arrow inactive" width="32px" />
                    </ButtonIcon>
                  )
              }
            </div>
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${selectedCategories * 100}%)` }}
              >
                <div className="flex mt-4 lg:mt-0">
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.individual.description') }
                    </p>
                    <img src={ServiceImages.Individu} alt="ilustrasi konseling individu" width="200px" />
                  </div>
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.couples.description') }
                    </p>
                    <img src={ServiceImages.Pasangan} alt="ilustrasi konseling pasangan" width="200px" />
                  </div>
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.family.description') }
                    </p>
                    <img src={ServiceImages.Keluarga} alt="ilustrasi konseling keluarga" width="200px" />
                  </div>
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.psychological.description') }
                    </p>
                    <img src={ServiceImages.Psikologis} alt="ilustrasi konseling psikologis" width="200px" />
                  </div>
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.workshop.description') }
                    </p>
                    <img src={ServiceImages.Workshop} alt="ilustrasi konseling workshop" width="200px" />
                  </div>
                  <div className="flex flex-col-reverse text-secondary lg:flex-row items-center w-250 sm:w-500 md:w-600 lg:w-750 gap-4">
                    <p>
                      { t('services.categories.webinars.description') }
                    </p>
                    <img src={ServiceImages.Webinar} alt="ilustrasi konseling webinar" width="200px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            selectedCategories < 5
              ? (
                <ButtonIcon className="w-12 lg:block hidden" onClick={() => setSelectedCategories(selectedCategories + 1)}>
                  <img src={Images.RightArrowActive} alt="right arrow active" width="32px" />
                </ButtonIcon>
              )
              : (
                <ButtonIcon className="w-12 cursor-not-allowed lg:block hidden">
                  <img src={Images.RightArrowInactive} alt="right arrow inactive" width="32px" />
                </ButtonIcon>
              )
          }
        </div>
      </div>
      <WhySection />
    </div>
  );
}

function WhySection() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl lg:my-24 w-3/4 lg:w-full lg:pb-20">
      <h1 className="text-center text-primary text-2xl lg:text-5xl font-bold">
        {t('services.why.title')}
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:mt-16 mt-12 gap-12">
        <div className="flex flex-col items-center gap-6 w-80">
          <img src={ServiceImages.WhyFirst} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-primary text-center font-medium">
            {t('services.why.first')}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 w-80">
          <img src={ServiceImages.WhySecond} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-primary text-center font-medium">
            {t('services.why.second')}
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 w-80">
          <img src={ServiceImages.WhyThird} alt="kenapa pulih@thepeak" width="150px" />
          <p className="text-primary text-center font-medium">
            {t('services.why.third')}
          </p>
        </div>
      </div>
    </div>
  );
}

function Service() {
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
      <Header page="Service" />
      <ServiceSection />
      <ServiceCategories />
      <Footer />
    </MainLayout>
  );
}

export default Service;
