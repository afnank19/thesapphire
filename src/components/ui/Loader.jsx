import { Spinner } from '@phosphor-icons/react';

// COULD be improved, but it be what it be man, i am tired

const Loader = () => {
  return (
    <div className="relative flex items-center justify-center animate-spin">
      <div className="text-gray-400">
        <Spinner size={'2rem'} />
      </div>
    </div>
  );
};

export default Loader;
