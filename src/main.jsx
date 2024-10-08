import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './pages/blogpage.jsx';
import BlogPage from './pages/blogpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    //Sir Husnains own route
    path: '/H-dev-env',
    element: (
      <p>After you've created your page, please place it here in main.jsx</p>
      // Example ->  element: <HomePage />
    )
  },
  {
    // Moeezs own route
    path: '/M-dev-env',
    element: (
      <BlogPage />
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
