import { useQuery } from '@tanstack/react-query';
import ProfileMeta from '../components/profile/ProfileMeta';
import { fetchUserProfile } from '../services/api/services/user';
import { useLocation, useParams } from 'react-router-dom';
import { SmileyXEyes, Spinner } from '@phosphor-icons/react';
import Loader from '../components/ui/Loader';
import ErrorText from '../components/ui/ErrorText.jsx';
import { DEFAULT_ERR_MESSAGE } from '../utils/constants.js';

// import Loader from '../components/ui/Loader';

const ProfilePage = () => {
  const { id } = useParams();

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => fetchUserProfile(id),
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

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
      </div>
    </div>
  );
};

export default ProfilePage;
