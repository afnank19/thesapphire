import { useInfiniteQuery } from '@tanstack/react-query';
import { getComments } from '../services/api/services/blog';

export const useFetchComments = (blogContentId) => {
  return useInfiniteQuery({
    queryKey: ['comments', blogContentId],
    queryFn: getComments,
    refetchOnWindowFocus: false,
    initialPageParam: {
      lastDocId: undefined,
      blogContentId: blogContentId
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) {
        return null;
      }

      return {
        lastDocId: lastPage[lastPage.length - 1].id,
        blogContentId: blogContentId
      };
    }
  });
};
