import { SignOut, UserCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../../services/state/authStore';

// NOTE: This component is put in the shared folder
// Although this is not reuseable, it could be made reuseable
// but at the current state of the project, there will only be this
// this dropdown, in case more are required, make a new general purpose
// one, and maybe we can shift this to the general one yet
const Dropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <UserCircle size={'1.5rem'} />
      </button>
      {isExpanded && (
        <div className="absolute bg-[#EEE] dark:bg-[#191919] dark:text-gray-300 text-gray-500 rounded-lg px-4 py-1 right-0 w-52 flex flex-col gap-3 items-start mt-2 drop-shadow-md z-10 ">
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-black dark:hover:text-white"
              to={`/profile/${useAuthStore.getState().id}`}
              onClick={handleLinkClick}
            >
              Profile
            </Link>
            <Link
              className="hover:text-black dark:hover:text-white"
              to={'/settings'}
              onClick={handleLinkClick}
            >
              Settings
            </Link>
          </div>
          <button className="flex items-center gap-2 text-sm">
            <SignOut />
            Sign out (INACTIVE)
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
