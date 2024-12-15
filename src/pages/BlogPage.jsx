import { useQuery } from '@tanstack/react-query';
import BlogContent from '../components/blog/BlogContent';
import BlogFooter from '../components/blog/BlogFooter';
import BlogMeta from '../components/blog/BlogMeta';
import { fetchABlogById } from '../services/api/services/blog';
import { useParams } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import ErrorText from '../components/ui/ErrorText';
import { DEFAULT_ERR_MESSAGE } from '../utils/constants';

// TODO: Fetch blog data as custom hook from the API
// Send the data as props to respective components
const BlogPage = () => {
  const { id } = useParams();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchABlogById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return (
    <div className="flex flex-col items-center w-full">
      {/* <Navbar /> to be made, but it doesn't go here*/}
      <div className="max-w-3xl p-2">
        {isPending ? (
          <Loader />
        ) : isError ? (
          <ErrorText message={DEFAULT_ERR_MESSAGE} />
        ) : (
          <>
            <BlogMeta blogMeta={data} />
            <BlogContent content={data.content} />
            <BlogFooter />
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
