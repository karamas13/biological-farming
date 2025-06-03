// main.jsx or wherever you define your routes
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import WinterFarms from './pages/WinterFarms';
import SummerFarms from './pages/SummerFarms';
import AboutUs from './pages/AboutUs';
import Farms from './pages/Farms';
import Contact from './pages/Contact';

import ScrollWrapper from './components/ScrollWrapper';

const withScroll = (element) => <ScrollWrapper>{element}</ScrollWrapper>;

const router = createBrowserRouter([
  {
    path: '/',
    element: withScroll(<HomePage />),
  },
  {
    path: '/WinterFarms',
    element: withScroll(<WinterFarms />),
  },
  {
    path: '/SummerFarms',
    element: withScroll(<SummerFarms />),
  },
  {
    path: '/AboutUs',
    element: withScroll(<AboutUs />),
  },
  {
    path: '/Farms',
    element: withScroll(<Farms />),
  },
  {
    path: '/Contact',
    element: withScroll(<Contact />),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
