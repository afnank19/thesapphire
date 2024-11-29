import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import TempStarter from './pages/TempStarter.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import HomePage from './pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <TempStarter /> }, // Homepage goes here
      {
        path: '/A-dev-env',
        element: <HomePage />
      },
      { path: '/M-dev-env', element: <p>Why wont this work</p> },
      {
        path: '/H-dev-env',
        element: <p>Place your page you are currently working on here</p>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
