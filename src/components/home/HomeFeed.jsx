import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import BlogList from '../shared/BlogList';
import CategoyFilter from '../shared/CategoyFilter';
import SectionHeader from '../ui/SectionHeader';
import { fetchBlogs } from '../../services/api/services/blog';
import { useEffect, useState } from 'react';
import { useCategoryStore } from '../../services/state/category';
import { useFetchBlogs } from '../../hooks/useFetchBlogs.js';

// TODO: useInfiniteQuery could be improved
const HomeFeed = () => {
  // The current impl of state is not fun, because we have local state
  // and global state, this needs to be re done
  // const [activeCategory, setActiveCategory] = useState('Latest');
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

  // TODO: Maybe create a custom hook for this
  // Keeping this here for now incase something goes wrong
  // const {
  //   data,
  //   error,
  //   status,
  //   fetchNextPage,
  //   isFetchingNextPage,
  //   hasNextPage
  // } = useInfiniteQuery({
  //   queryKey: ['homeblogs'],
  //   queryFn: fetchBlogs,
  //   initialPageParam: undefined,
  //   getNextPageParam: (lastPage) => {
  //     if (lastPage.length === 0) {
  //       return null;
  //     }

  //     return lastPage[lastPage.length - 1].id;
  //   }
  // });
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
        <div className="flex items-center justify-center"> Loading... </div>
      ) : status === 'error' ? (
        <div>We're having trouble</div>
      ) : (
        <>
          <BlogList pages={data?.pages} />
          <button
            className="text-green-600 hover:text-green-500 border border-green-600 rounded-2xl text-sm px-4 py-1"
            onClick={fetchNextPage}
            disabled={isFetchingNextPage || !hasNextPage}
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default HomeFeed;
