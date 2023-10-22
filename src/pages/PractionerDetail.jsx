import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PsychologistImages from '../images/psychologist';
import MainLayout from '../layout/MainLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonIcon from '../components/ButtonIcon';

function PractionerSection() {
  const { slug } = useParams();
  const practionerList = [
    {
      name: 'Wrenges Widiastuti, MDM',
      skills: [
        'Praktisi Ahli',
      ],
      skills_detail: [
        'Praktisi Ahli',
      ],
      photo: PsychologistImages.Wrenges,
      alt: 'Ibu Ika',
      slug: 'wrenges-widiastuti',
      profile: `Wrenges Widiastuti adalah seorang akuntan yang juga melanjutkan Pendidikan S2 Manajemen Pembangunan di Asian Institute of Management, Manila. Mengawali karir sebagai auditor di Kemenkeu Republik Indonesia tahun 1987. Berpengalaman bekerja ke beberapa perusahaan swasta yaitu Nestle, Natra Raya, dan Price Waterhouse, sebelum akhirnya fokus berupaya menguatkan manajemen keuangan di berbagai LSM mulai tahun 2005.
      
      Perhatiannya terhadap isu keuangan pribadi menjadi alasannya bergabung dengan Pulih@thePeak. Wrenges Widiastuti melakukan berbagai pelatihan literasi keuangan. Selain itu juga memberikan konsultasi keuangan pribadi kepada klien yang membutuhkan.`,
    },
    {
      name: 'A.R.S.R Irene Sirait',
      skills: [
        'Praktisi Ahli',
      ],
      skills_detail: [
        'Praktisi Ahli',
      ],
      photo: PsychologistImages.Irene,
      alt: 'Ibu Ika',
      slug: 'irene-sirait',
      profile: `Lulusan Fakultas Psikologi Universitas Indonesia yang mendapat kesempatan memperdalam mengenai permasalahan HIV/AIDS di Melbourne University, Melbourne, Australia dan Sistem Manajemen Kesehatan di Galillee College, Israel.

      Memiliki pengalaman berkarir selama 25 tahun di berbagai negara Asia-Afrika dengan berbagai lembaga kemanusiaan internasional dan PBB sebagai penanggung jawab program kemanusiaan baik program tanggap darurat psikososial paska bencana maupun program kesehatan mental. Di Indonesia, Irene Sirait terlibat memimpin respon tanggap darurat psikososial di berbagai paska bencana seperti gempa dan tsunami Aceh hingga Sulawesi Tengah.`,
    },
  ];

  const practionerIndex = practionerList.findIndex((val) => val.slug === slug);
  const practioner = practionerList[practionerIndex];
  const nextPractioner = practionerList[practionerIndex + 1];
  const previousPractioner = practionerList[practionerIndex - 1];

  return (
    <div className="container mx-auto my-20 mt-36">
      <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8">
        <div className="lg:w-1/3 w-1/2">
          <img src={practioner.photo} alt={practioner.alt} className="rounded-2xl" />
        </div>
        <div className="w-2/3 ml-12">
          <h1 className="text-primary text-3xl font-bold">
            {practioner.name}
          </h1>
          <h2 className="text-primary text-xl font-bold mt-6">Profil</h2>
          <p className="text-secondary leading-loose whitespace-pre-line text-justify font-medium mt-2">
            {practioner.profile}
          </p>
          <h2 className="text-primary text-xl font-bold mt-6">Spesialisasi</h2>
          <div className="mt-2">
            {
              practioner.skills_detail.map((skill) => (
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
          practionerIndex > 0
            ? (
              <Link to={`/practioner/${previousPractioner.slug}`} className="w-1/2">
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
              <Link to={`/practioner/${nextPractioner.slug}`} className="w-1/2">
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
