import { useQuery } from '@tanstack/react-query';
import ProfileMeta from '../components/profile/ProfileMeta';
import { fetchUserProfile } from '../services/api/services/user';
import { useLocation, useParams } from 'react-router-dom';
import { SmileyXEyes } from '@phosphor-icons/react';

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
          <div>Loading Spinner</div>
        ) : isError ? (
          <div>
            <SmileyXEyes size={'2.5rem'} />
            We're having trouble fetching profiles
          </div>
        ) : (
          <ProfileMeta userData={data} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
