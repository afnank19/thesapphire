import { useInfiniteQuery } from '@tanstack/react-query';
import BlogList from '../shared/BlogList';
import CategoyFilter from '../shared/CategoyFilter';
import SectionHeader from '../ui/SectionHeader';
import { fetchBlogs } from '../../services/api/services/blog';
import { useState } from 'react';

const HomeFeed = () => {
  const searchTerm = 'Vercel';

  const { data, error, status, fetchNextPage } = useInfiniteQuery({
    queryKey: ['homeblogs', searchTerm],
    queryFn: fetchBlogs,
    initialPageParam: { id: undefined, term: searchTerm },
    getNextPageParam: (lastPage) => {
      // console.log('GNPP');
      // console.log(lastPage[lastPage.length - 1].id);

      return { id: lastPage[lastPage.length - 1].id, term: searchTerm };
    }
  });

  return (
    <div>
      <SectionHeader headingText={'Student Blogs'} />
      {/* <CategoyFilter /> */}
      <div className="sticky top-0">
        <CategoyFilter />
      </div>
      <BlogList />
      <button className="bg-black text-white" onClick={fetchNextPage}>
        {' '}
        Load More
      </button>
    </div>
  );
};

export default HomeFeed;
