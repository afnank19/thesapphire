import { useInfiniteQuery } from '@tanstack/react-query';
import { getBlogByAUser } from '../services/api/services/blog';

export const useFetchUserBlogs = (userId) => {
  return useInfiniteQuery({
    queryKey: ['userblogs', userId],
    queryFn: getBlogByAUser,
    enabled: false,
    initialPageParam: { lastDocId: undefined, userId: userId },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) {
        return null;
      }

      return { lastDocId: lastPage[lastPage.length - 1].id, userId: userId };
    }
  });
};
