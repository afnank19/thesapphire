import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../services/state/authStore';
import { useQuery } from '@tanstack/react-query';
import { getSession } from '../../services/api/auth';

// Determine auth status here
const SessionProvider = ({ children }) => {
  // I feel like this is very shit code
  // Should probably be written better
  let auth = false;
  const navigate = useNavigate();

  const [madeSessionRequest, setMadeSessionRequest] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const accessToken = useAuthStore.getState().accessToken;
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const { data, error, isPending, isError, isSuccess } = useQuery({
    queryKey: ['accessToken'],
    queryFn: getSession,
    enabled: accessToken === '' ? true : false,
    retry: false
  });

  // if (isPending) {
  //   console.log('ATTEMPT : Fetching new tokens');

  //   return <div>Loading</div>;
  // }

  // Maybe this is where you stay on the signin page
  // if (isError) {
  //   console.log(error.response.data);
  //   navigate('/signin', { replace: true });
  // }

  // if (isSuccess) {
  //   console.log(data);
  //   setAccessToken(data.aTkn);
  // }

  useEffect(() => {
    if (isError && useAuthStore.getState().accessToken === '') {
      navigate('/signin', { replace: true });
    }

    if (isSuccess) {
      console.log(data);
      setAccessToken(data.aTkn);
    }
  }, [isError, isSuccess]);

  // const getNewSession = async () => {
  //   setMadeSessionRequest(true);
  //   try {
  //     const data = await getSession();

  //     console.log('Setting access token');
  //     console.log(data.aTkn);
  //     setAccessToken(data.aTkn);
  //   } catch (error) {
  //     console.log(error);
  //     console.log('No session found');
  //     setMadeSessionRequest(false);
  //     navigate('/signin', { replace: true });
  //   }
  // };

  return children;
};

export default SessionProvider;
