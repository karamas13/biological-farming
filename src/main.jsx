import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from 'lenis/react'; // 1. Import Lenis here

import './index.css';
import ScrollWrapper from './components/ScrollWrapper';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const WinterFarms = lazy(() => import('./pages/WinterFarms'));
const SummerFarms = lazy(() => import('./pages/SummerFarms'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Farms = lazy(() => import('./pages/Farms'));
const Contact = lazy(() => import('./pages/Contact'));

const withLayout = (Component, footerColor, navProps = {}) => (
  <HelmetProvider>
    <ReactLenis root options={{ lerp: 0.05 }}>
      <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
        <NavBar /> 
        <ScrollWrapper>        
          <Component />
        </ScrollWrapper>
        <Footer color={footerColor} /> 
      </Suspense>
    </ReactLenis>
  </HelmetProvider>
);

const router = createBrowserRouter([
  { path: '/', element: withLayout(HomePage, "#020617") },
  { path: '/WinterFarms', element: withLayout(WinterFarms, "#09090b") },
  { path: '/SummerFarms', element: withLayout(SummerFarms, "#09090b") },
  { path: '/AboutUs', element: withLayout(AboutUs, "#09090b") },
  { path: '/Farms', element: withLayout(Farms, "#020617") },
  { path: '/Contact', element: withLayout(Contact, "#09090b") },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);