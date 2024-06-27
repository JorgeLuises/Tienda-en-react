import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

//Importación de los componentes para las rutas
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PorductDetailPage from './pages/ProductDetailPage';
import MainLayout from './layout/MainLayout';

//REACT-ROUTER-BROWSER es una librería de react que ayuda a crear varias rutas en una pagina web, pero en realidad solo se ocupa una sola pagina y en esa misma pagina se renderiza todos nuestros elementos 

//Definicion de las rutas de nuestra pagina web
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path:'/',
        element: <HomePage />
      },
      {
        path:'/productos',
        element: <ProductsPage />
      },
      {
        path: '/productos/:id',
        element: <PorductDetailPage />
      }
    ]
  },
  {
    path:'/login',
    element: <LoginPage /> //Importamos los eleentos de login
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    {/*Renderizando las rutas */}
    <RouterProvider router={router} />
  </>
);
