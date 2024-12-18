import { WarningCircle } from '@phosphor-icons/react';

const ErrorToast = ({ message }) => {
  return (
    <div className="flex items-center gap-1 bg-red-900 text-red-100 border rounded-lg  border-red-600 text-sm mt-2 px-4 py-1 opacity-85 flex-wrap w-full">
      <WarningCircle size={'1.3rem'} />
      {message}
    </div>
  );
};

export default ErrorToast;
