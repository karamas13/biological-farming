import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage';
import SummerFarms from './pages/SummerFarms'


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage />
  },
  {
    path:"/SummerFarms",
    element:<SummerFarms />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>,
)
