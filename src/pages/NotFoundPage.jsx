import { WarningOctagon } from '@phosphor-icons/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <div className="flex gap-2 items-center">
        <WarningOctagon size={'2rem'} className="text-red-700" />
        <h1 className="text-3xl font-bold">404 Not Found</h1>
      </div>
      <p className="text-gray-600">
        Aren't you an explorer! Unfortunately there isn't a page here.
      </p>
      <Link
        to={'/'}
        className="mt-4 bg-blue-600 text-white px-4 rounded-xl hover:bg-blue-500"
      >
        Head back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
