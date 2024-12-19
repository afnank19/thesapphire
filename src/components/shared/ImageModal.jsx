import { X } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MasonryGrid from './MasonryGrid';
import { getImages } from '../../services/api/services/externalSvc';
import Loader from '../ui/Loader';
import ErrorText from '../ui/ErrorText';

const ImageModal = ({ setOpen, setImage }) => {
  // const [image, setImage] = useState('');
  // const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query != '') {
      // mutation.mutate({ imgSearchTerm: 'software' });
      refetch();
    }
  };

  const { data, error, isPending, isError, refetch, isFetching } = useQuery({
    queryKey: ['images'],
    queryFn: () => getImages(query),
    enabled: false
  });

  return (
    <div className="w-full h-full bg-black/20 absolute top-0 left-0 flex items-center justify-center z-10">
      <div className="bg-gray-100 dark:bg-[#191919] rounded-3xl p-4 m-2 max-w-2xl w-full flex flex-col gap-4 min-h-60">
        <div className="flex justify-between">
          <p className=" text-xl">Select a cover image</p>
          <button
            className="hover:text-red-600"
            onClick={() => {
              setOpen(false);
            }}
          >
            <X size={'1.5rem'} />
          </button>
        </div>
        <input
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className="bg-[#f1f1f1] dark:bg-[#1f1f1f] border border-gray-300 dark:border-[#3b3b3b] dark:text-white rounded-lg p-1 text-sm text-black focus:border-gray-400 outline-none"
          placeholder="Search the entirety of Pexels"
          type="text"
        ></input>
        {isFetching ? (
          <Loader />
        ) : isError ? (
          <ErrorText message={'A problem occured when fetching images'} />
        ) : (
          <MasonryGrid images={data} setOpen={setOpen} setImage={setImage} />
        )}
      </div>
    </div>
  );
};

export default ImageModal;
