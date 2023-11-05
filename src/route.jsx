import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Psychologist from './pages/Psychologist';
import Merchandise from './pages/Merchandise';
import PsychologistDetail from './pages/PsychologistDetail';
import PractionerDetail from './pages/PractionerDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/service',
    element: <Service />,
  },
  {
    path: '/psychologs',
    element: <Psychologist />,
  },
  {
    path: '/psychologs/:slug',
    element: <PsychologistDetail />,
  },
  {
    path: '/practioners/:slug',
    element: <PractionerDetail />,
  },
  {
    path: '/merchandise',
    element: <Merchandise />,
  },
]);

export default router;
