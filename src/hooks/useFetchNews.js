import { useQuery } from '@tanstack/react-query';
import { getNews } from '../services/api/services/externalSvc';

export const useFetchNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: getNews,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });
};
