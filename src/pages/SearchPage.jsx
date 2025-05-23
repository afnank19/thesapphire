import BlogList from '../components/shared/BlogList';
import CategoyFilter from '../components/shared/CategoyFilter';
import SectionHeader from '../components/ui/SectionHeader';
import Loader from '../components/ui/Loader.jsx';
import ErrorText from '../components/ui/ErrorText.jsx';

import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBlogs } from '../services/api/services/blog.js';
import { useCategoryStore } from '../services/state/category.js';
import { useFetchBlogs } from '../hooks/useFetchBlogs.js';
import { useLocation } from 'react-router-dom';
import { useQueryStore } from '../services/state/queryStore.js';
import { DEFAULT_ERR_MESSAGE } from '../utils/constants.js';

const SearchPage = () => {
  // const [activeCategory, setActiveCategory] = useState('Latest');
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const setActiveCtgry = useCategoryStore((state) => state.setActiveCtgry);

  const setSearchQuery = useQueryStore((state) => state.setSearchQuery);
  const location = useLocation();

  const queryClient = useQueryClient();

  // This enables searching
  setSearchQuery(decodeURIComponent(location.search.split('=')[1]));
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['searchedblogs'] });
    setSearchQuery(decodeURIComponent(location.search.split('=')[1]));
    return () => {
      setSearchQuery('');
      setActiveCtgry('Latest');
    };
  }, []);

  const {
    data,
    error,
    status,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useFetchBlogs('searchedblogs', fetchBlogs);

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['searchedblogs'] });
  };

  // Could possible be a custom hook
  // useEffect(() => {
  //   setActiveCtgry(activeCategory);
  //   queryClient.invalidateQueries({ queryKey: ['searchedblogs'] });
  // }, [activeCategory]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['searchedblogs'] });
  }, [location]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-xl w-full p-2">
        <div className="flex gap-2">
          <SectionHeader headingText={'Results for'} color={'text-gray-400'} />
          <h1 className="font-bold text-2xl mb-4">
            {decodeURIComponent(location.search.split('=')[1])}
          </h1>
        </div>
        <div className="sticky top-0">
          <CategoyFilter
            activeCategory={activeCategory}
            setActiveCtgry={setActiveCtgry}
            invalidateQueries={invalidateQueries}
          />
        </div>
        {status === 'pending' ? (
          <div className="flex items-center justify-center"> Loading... </div>
        ) : status === 'error' ? (
          <ErrorText message={DEFAULT_ERR_MESSAGE} />
        ) : (
          <>
            {isFetching && !isFetchingNextPage ? <Loader /> : null}
            <BlogList pages={data?.pages} />
            <div className="flex justify-center mt-4">
              <button
                className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1"
                onClick={fetchNextPage}
                disabled={isFetchingNextPage || !hasNextPage}
              >
                {isFetchingNextPage
                  ? 'Loading'
                  : hasNextPage
                  ? 'Load More'
                  : 'No more results'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
