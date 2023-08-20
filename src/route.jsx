import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Psychologist from './pages/Psychologist';
import Merchandise from './pages/Merchandise';

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
    path: '/psychologist',
    element: <Psychologist />,
  },
  {
    path: '/merchandise',
    element: <Merchandise />,
  },
]);

export default router;
