import { useMutation } from '@tanstack/react-query';
import { updateUserAbout } from '../../services/api/services/user';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

const ProfileSettings = () => {
  const [newAbout, setNewAbout] = useState('');

  const mutation = useMutation({
    mutationFn: (data) => updateUserAbout(data),
    onSuccess: (data) => {
      console.log('Updated bio');
      toast.success('Updated about');
    },
    onError: (error) => {
      console.log(error.data.message);
      toast.error("Couldn't update About");
    }
  });

  const handleUpdateClick = () => {
    if (newAbout === '') {
      return;
    }
    mutation.mutate({ newAbout: newAbout });
  };

  return (
    <div className="flex flex-col pb-12 mb-4">
      <Toaster richColors position="bottom-left" />
      <h3 className="border-t border-gray-300 dark:border-[#7D7D7D] py-2 mt-2 text-lg">
        Profile
      </h3>
      <p className="text-md text-gray-800 dark:text-gray-200 mt-8">About</p>
      <p className="text-sm text-gray-400 mb-2">A short bio about yourself</p>
      <textarea
        onChange={(e) => {
          setNewAbout(e.target.value);
        }}
        className="bg-[#EAEAEA] dark:bg-[#191919] dark:border-[#7D7D7D] dark:text-white border border-gray-300 rounded-lg p-1 text-sm text-black focus:border-gray-400 outline-none resize-none h-20"
        type="text"
        maxLength={160}
      ></textarea>
      <button
        className="bg-green-600 hover:bg-green-500 text-white w-full rounded-2xl text-sm px-4 py-1 mt-8 max-w-max self-end"
        onClick={handleUpdateClick}
        disabled={mutation.isPending ? true : false}
      >
        {mutation.isPending ? 'Updating' : 'Update'}
      </button>
    </div>
  );
};

export default ProfileSettings;
