import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import BlogList from '../shared/BlogList';
import CategoyFilter from '../shared/CategoyFilter';
import SectionHeader from '../ui/SectionHeader';
import { fetchBlogs } from '../../services/api/services/blog';
import { useEffect, useState } from 'react';
import { useCategoryStore } from '../../services/state/category';

// TODO: useInfiniteQuery could be improved
const HomeFeed = () => {
  // The current impl of state is not fun, because we have local state
  // and global state, this needs to be re done
  const [activeCategory, setActiveCategory] = useState('Latest');
  const setActiveCtgry = useCategoryStore((state) => state.setActiveCtgry);

  const queryClient = useQueryClient();

  // TODO: Maybe create a custom hook for this
  const { data, error, status, fetchNextPage } = useInfiniteQuery({
    queryKey: ['homeblogs'],
    queryFn: fetchBlogs,
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) {
        return null;
      }

      return lastPage[lastPage.length - 1].id;
    }
  });

  // Could possible be a custom hook
  useEffect(() => {
    console.log('Effect Cat: ' + activeCategory);
    setActiveCtgry(activeCategory);
    queryClient.invalidateQueries({ queryKey: ['homeblogs'] });
    // queryClient.removeQueries({ queryKey: ['homeblogs'] });
    // queryClient.refetchQueries({ queryKey: ['homeblogs'] });
    // fetchNextPage();
  }, [activeCategory]);

  // Clean up JSX
  return (
    <div>
      <SectionHeader headingText={'Student Blogs'} />
      <div className="sticky top-0">
        <CategoyFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
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
          >
            Load More
          </button>
        </>
      )}
    </div>
  );
};

export default HomeFeed;
