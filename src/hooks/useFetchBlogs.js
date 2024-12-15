import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';

export const useFetchBlogs = (queryKey, queryFn) => {
  return useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
    initialPageParam: undefined,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => {
      if (lastPage.length === 0) {
        return null;
      }

      return lastPage[lastPage.length - 1].id;
    }
  });
};
