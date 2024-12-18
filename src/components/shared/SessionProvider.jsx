import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../services/state/authStore';
import { useQuery } from '@tanstack/react-query';
import { getSession } from '../../services/api/auth';

// Determine auth status here
const SessionProvider = ({ children }) => {
  // I feel like this is very shit code
  // Should probably be written better
  const navigate = useNavigate();
  const accessToken = useAuthStore.getState().accessToken;
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const setUserId = useAuthStore((state) => state.setUserId);

  const { data, error, isPending, isError, isSuccess, isFetching } = useQuery({
    queryKey: ['accessToken'],
    queryFn: getSession,
    enabled: accessToken === '' ? true : false,
    retry: false
  });

  useEffect(() => {
    if (isError && useAuthStore.getState().accessToken === '') {
      navigate('/signin', { replace: true });
    }

    if (isSuccess) {
      console.log(data);
      setAccessToken(data.aTkn);
      setUserId(data.id);
    }
  }, [isError, isSuccess]);

  return isFetching ? <div>Loading</div> : children;
};

export default SessionProvider;
