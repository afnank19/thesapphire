import { useMutation, useQueryClient } from '@tanstack/react-query';
import CommentList from '../shared/CommentList';
import { postComment } from '../../services/api/services/blog';
import Loader from '../ui/Loader';
import ErrorText from '../ui/ErrorText';
import { useParams } from 'react-router-dom';
import { useFetchComments } from '../../hooks/useFetchComments';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { ChatsCircle } from '@phosphor-icons/react';

const BlogFooter = () => {
  const [commentTxt, setCommentTxt] = useState('');

  const { id } = useParams();

  const {
    data,
    isPending,
    isError,
    isFetching,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage
  } = useFetchComments(id);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: (data) => {
      toast.success('Comment Posted!');
      queryClient.invalidateQueries({ queryKey: ['comments', id] });
    },
    onError: (error) => {
      toast.error('Could not post comment');
    }
  });

  const handlePostComment = () => {
    if (commentTxt === '') {
      toast.warning('Empty comment? really?');
      return;
    }

    const commentObj = {
      displayDate: Date.now(),
      comment: commentTxt,
      blogContentId: id
    };

    setCommentTxt('');

    mutation.mutate(commentObj);
  };

  return (
    <div className="p-2 mt-8">
      <Toaster position="bottom-left" richColors />
      <h1 className="text-2xl font-semibold flex gap-1 items-center">
        <ChatsCircle />
        Conversation
      </h1>
      <p className="text-sm font-medium text-[#7d7d7d] mb-6">
        Please be respectful in the comments!
      </p>
      <div className="flex gap-2 items-center">
        <input
          maxLength={160}
          placeholder="What are your thoughts?"
          value={commentTxt}
          onChange={(e) => {
            setCommentTxt(e.target.value);
          }}
          className="w-full bg-[#EAEAEA] 
                     border 
                     border-gray-300 
                     dark:bg-[#191919] 
                     dark:border-[#3b3b3b] 
                     dark:text-[#F3f3f3] 
                     rounded-full
                     p-1
                     px-3
                     mb-2 
                     text-black 
                     focus:border-gray-400 
                     outline-none"
        ></input>
        <button
          className="bg-green-600 hover:bg-green-500 text-white rounded-2xl text-sm h-max px-4 py-1 mb-2"
          onClick={handlePostComment}
        >
          {mutation.isPending ? 'Posting' : 'Post'}
        </button>
      </div>
      {isPending ? (
        <Loader />
      ) : isError ? (
        <ErrorText message={'Error loading comments'} />
      ) : (
        <>
          <CommentList pages={data?.pages} />
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
  );
};

export default BlogFooter;
