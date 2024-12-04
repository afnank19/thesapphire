import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import WritingPage from './pages/WritingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SessionProvider from './components/shared/SessionProvider.jsx';
import SignInPage from './pages/SignInPage.jsx';
import AuthRedirection from './components/shared/AuthRedirection.jsx';
import SearchPage from './pages/SearchPage';
import BlogPage from './pages/BlogPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <SessionProvider>
        <App />
      </SessionProvider>
    ),
    children: [
      { index: true, element: <HomePage /> }, // Homepage goes here
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/blog/:id',
        element: <BlogPage />
      },
      {
        path: '/profile/:id',
        element: <ProfilePage />
      },
      {
        path: '/settings',
        element: <SettingsPage />
      }
    ]
  },
  {
    path: '/write',
    element: (
      <SessionProvider>
        <WritingPage />
      </SessionProvider>
    )
  },
  {
    path: '/app',
    element: (
      <SessionProvider>
        <SignUpPage /> {/**Landing Page goes here */}
      </SessionProvider>
    )
  },
  {
    path: '/signin',
    element: (
      <AuthRedirection>
        <SignInPage />
      </AuthRedirection>
    )
  },
  {
    path: '/signup',
    element: (
      <AuthRedirection>
        <SignUpPage />
      </AuthRedirection>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
