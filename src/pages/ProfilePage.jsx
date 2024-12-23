import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchUserProfile } from '../services/api/services/user';
import { useFetchUserBlogs } from '../hooks/useFetchUserBlogs.js';
import { DEFAULT_ERR_MESSAGE } from '../utils/constants.js';
import ProfileMeta from '../components/profile/ProfileMeta';
import Loader from '../components/ui/Loader';
import ErrorText from '../components/ui/ErrorText.jsx';
import BlogList from '../components/shared/BlogList.jsx';

const ProfilePage = () => {
  const { id } = useParams();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => fetchUserProfile(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  const {
    data: userBlogs,
    isPending: isPendingUserBlogs,
    isError: isErrorUserBlogs,
    refetch,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useFetchUserBlogs(id);

  const handleLoadUseBlogs = () => {
    refetch();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-3xl w-full p-2">
        {isPending ? (
          <Loader />
        ) : isError ? (
          <ErrorText message={DEFAULT_ERR_MESSAGE} />
        ) : (
          <>
            <ProfileMeta userData={data} />
          </>
        )}

        {isPendingUserBlogs ? (
          <div className="flex justify-center items-center my-4">
            <button
              className="text-black border border-black w-max px-4 rounded-full text-sm py-1 dark:text-slate-50 dark:border-slate-50"
              onClick={handleLoadUseBlogs}
            >
              {isFetching ? 'Loading' : 'Load blogs by user'}
            </button>
          </div>
        ) : isErrorUserBlogs ? (
          <ErrorText message={DEFAULT_ERR_MESSAGE} />
        ) : (
          <>
            <h1 className="font-medium text-xl mt-0 px-2 pt-4 mb-4">
              By the author
            </h1>
            <BlogList pages={userBlogs?.pages} />
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

export default ProfilePage;
