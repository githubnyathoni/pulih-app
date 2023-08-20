import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Psychologist from './pages/Psychologist';

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
]);

export default router;
