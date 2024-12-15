import { SmileyXEyes } from '@phosphor-icons/react';

const ErrorText = ({ message }) => {
  return (
    <div className="flex gap-2 text-gray-500 w-full justify-center">
      <SmileyXEyes size={'1.5rem'} />
      {message}
    </div>
  );
};

export default ErrorText;
