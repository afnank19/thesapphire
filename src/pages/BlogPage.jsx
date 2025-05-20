import { useQuery } from '@tanstack/react-query';
import BlogContent from '../components/blog/BlogContent';
import BlogFooter from '../components/blog/BlogFooter';
import BlogMeta from '../components/blog/BlogMeta';
import { fetchABlogById } from '../services/api/services/blog';
import { useParams } from 'react-router-dom';
import Loader from '../components/ui/Loader';
import ErrorText from '../components/ui/ErrorText';
import { DEFAULT_ERR_MESSAGE } from '../utils/constants';
import { Link } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import { useEffect, useState } from 'react';

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

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("__r_tkn")
    if (token) {
      setLoggedIn(true);
    }
  }, [])

  return (
    <>
      {loggedIn === true ? 
        <Navbar />
        :
        <div className="flex items-center justify-between border-b dark:dark:border-[#3b3b3b]  py-1 px-3">
          <Link
            to={'/app'}
            className="font-news w-full text-center text-2xl hover:text-blue-800 transition-colors dark:hover:text-blue-300"
          >
            The Sapphire <span className="text-xs">Beta</span>
          </Link>
        </div>
      }
      <div className="flex flex-col items-center w-full">
        {/* <Navbar /> to be made, but it doesn't go here*/}
        <div className="max-w-3xl w-full p-2">
          {isPending ? (
            <Loader />
          ) : isError ? (
            <ErrorText message={DEFAULT_ERR_MESSAGE} />
          ) : (
            <>
              <BlogMeta blogMeta={data} />
              <BlogContent content={data.content} />
              <BlogFooter loggedIn={loggedIn} />
            </>
          )}
        </div>
      </div>
    </>

  );
};

export default BlogPage;
