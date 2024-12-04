import { SignOut, UserCircle } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// NOTE: This component is put in the shared folder
// Although this is not reuseable, it could be made reuseable
// but at the current state of the project, there will only be this
// this dropdown, in case more are required, make a new general purpose
// one, and maybe we can shift this to the general one yet
const Dropdown = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <div className="absolute bg-[#EEE] text-gray-500 rounded-lg px-4 py-1 right-0 w-52 flex flex-col gap-2 items-start mt-2 drop-shadow-md z-10 ">
          <Link className="hover:text-black" to={'/profile/1'}>
            Profile
          </Link>
          <button className="flex items-center gap-2 text-sm">
            <SignOut />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
