import { UserCircle } from '@phosphor-icons/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-between border-b-2 py-1 px-3">
      <Link to={'/'} className="font-serif text-2xl">
        The Nust Sapphire
      </Link>
      <div className="flex gap-4 items-center">
        {/* The below code of the search bar should move to it's own component */}
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border rounded-lg bg-[#E1E1E1] focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search"
            required
          />
        </div>
        <Link>Write</Link>
        <p>
          <UserCircle size={'1.5rem'} />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
