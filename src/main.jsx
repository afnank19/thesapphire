import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import TempStarter from './pages/TempStarter.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import WritingPage from './pages/WritingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
    children: [
      { index: true, element: <TempStarter /> }, // Homepage goes here
      {
        path: '/home/A-dev-env',
        element: <WritingPage />
      },
      { path: '/home/M-dev-env', element: <p>Why wont this work</p> },
      {
        path: '/home/H-dev-env',
        element: <p>Place your page you are currently working on here</p>
      }
    ]
  },
  {
    path: '/test',
    element: <WritingPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
