import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './App.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
// import WritingPage from './pages/WritingPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SessionProvider from './components/shared/SessionProvider.jsx';
import SignInPage from './pages/SignInPage.jsx';
import SearchPage from './pages/SearchPage';
import BlogPage from './pages/BlogPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
// import SettingsPage from './pages/SettingsPage.jsx';
import BrandLoader from './components/ui/BrandLoader.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx';
// import LandingPage from './pages/LandingPage.jsx';

const WritingPage = lazy(() => import('./pages/WritingPage.jsx'));
const SettingsPage = lazy(() => import('./pages/SettingsPage.jsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));

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
      // {
      //   path: '/blog/:id',
      //   element: <BlogPage />
      // },
      {
        path: '/profile/:id',
        element: <ProfilePage />
      },
      {
        path: '/settings',
        element: (
          <Suspense fallback={<BrandLoader />}>
            <SettingsPage />
          </Suspense>
        )
      }
    ]
  },
  {
    path: '/blog/:id',
    element: <BlogPage />
  },
  {
    path: '/write',
    element: (
      <Suspense fallback={<BrandLoader />}>
        <SessionProvider>
          <WritingPage />
        </SessionProvider>
      </Suspense>
    )
  },
  {
    path: '/app',
    element: (
      <Suspense fallback={<BrandLoader />}>
        <LandingPage />
      </Suspense>
    )
  },
  {
    path: '/signin',
    element: <SignInPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<BrandLoader />}>
        <NotFoundPage />
      </Suspense>
    )
  }
]);

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
