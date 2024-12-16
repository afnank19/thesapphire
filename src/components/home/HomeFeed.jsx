import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import BlogList from '../shared/BlogList';
import CategoyFilter from '../shared/CategoyFilter';
import SectionHeader from '../ui/SectionHeader';
import { fetchBlogs } from '../../services/api/services/blog';
import { useEffect, useState } from 'react';
import { useCategoryStore } from '../../services/state/category';
import { useFetchBlogs } from '../../hooks/useFetchBlogs.js';
import Loader from '../ui/Loader.jsx';
import ErrorText from '../ui/ErrorText.jsx';
import { DEFAULT_ERR_MESSAGE } from '../../utils/constants.js';

const HomeFeed = () => {
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const setActiveCtgry = useCategoryStore((state) => state.setActiveCtgry);

  const queryClient = useQueryClient();

  const {
    data,
    error,
    status,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useFetchBlogs('homeblogs', fetchBlogs);

  const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['homeblogs'] });
  };

  useEffect(() => {
    return () => {
      setActiveCtgry('Latest');
    };
  }, []);

  // Clean up JSX
  return (
    <div>
      <SectionHeader headingText={'Student Blogs'} />
      <div className="sticky top-0">
        <CategoyFilter
          activeCategory={activeCategory}
          setActiveCtgry={setActiveCtgry}
          invalidateQueries={invalidateQueries}
        />
      </div>
      {status === 'pending' ? (
        <Loader />
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
  );
};

export default HomeFeed;
