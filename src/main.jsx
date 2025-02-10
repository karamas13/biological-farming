import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage';
import WinterFarms from './pages/WinterFarms'
import SummerFarms from './pages/SummerFarms'
import AboutUs from './pages/AboutUs';
import Farms from './pages/Farms';


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/WinterFarms",
    element:<WinterFarms className="scrollbar-thin h-32 min-h-full scr"/>
  },
  {
    path:"/SummerFarms",
    element:<SummerFarms className="scrollbar-thin h-32 min-h-full scr"/>
  },
  {
    path:"/AboutUs",
    element:<AboutUs className="scrollbar-thin h-32 min-h-full scr"/>
  },
  {
    path:"/Farms",
    element:<Farms className="scrollbar-thin h-32 min-h-full scr"/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
)
