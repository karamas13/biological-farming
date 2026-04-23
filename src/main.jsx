import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from 'lenis/react'; 

import './index.css';
import ScrollWrapper from './components/ScrollWrapper';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Auth Imports
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const WinterFarms = lazy(() => import('./pages/WinterFarms'));
const SummerFarms = lazy(() => import('./pages/SummerFarms'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Farms = lazy(() => import('./pages/Farms'));
const Contact = lazy(() => import('./pages/Contact'));

// Admin & Login Pages
const Login = lazy(() => import('./pages/Login'));
const AdminController = lazy(() => import('./pages/AdminController'));

const withLayout = (Component, footerColor, isProtected = false) => {
  const content = (
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

  // If the route is protected, wrap the whole layout in the ProtectedRoute logic
  return isProtected ? <ProtectedRoute>{content}</ProtectedRoute> : content;
};

const router = createBrowserRouter([
  { path: '/', element: withLayout(HomePage, "#020617") },
  { path: '/WinterFarms', element: withLayout(WinterFarms, "#09090b") },
  { path: '/SummerFarms', element: withLayout(SummerFarms, "#09090b") },
  { path: '/AboutUs', element: withLayout(AboutUs, "#09090b") },
  { path: '/Farms', element: withLayout(Farms, "#020617") },
  { path: '/Contact', element: withLayout(Contact, "#09090b") },
  
  // Login page (No NavBar/Footer usually needed here, or keep it consistent)
  { path: '/login', element: <Suspense fallback={<div/>}><Login /></Suspense> },
  
  // Protected Admin Route
  { 
    path: '/admin', 
    element: withLayout(AdminController, "#09090b", true) 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);