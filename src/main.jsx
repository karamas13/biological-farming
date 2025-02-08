import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage';
import WinterFarms from './pages/WinterFarms'
import SummerFarms from './pages/SummerFarms'


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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
)
