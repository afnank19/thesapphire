import { Link } from 'react-router-dom';

const CommentCard = ({ commentData }) => {
  const displayDate = new Date(commentData.displayDate);

  return (
    <div className="my-2 border-b border-zinc-300 dark:border-zinc-800">
      <Link
        className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline"
        to={`/profile/${commentData?.authorId}`}
      >
        {commentData?.author}
      </Link>
      <p className="text-sm font-medium text-zinc-500 mb-2 break-words">
        {displayDate.toDateString()}
      </p>
      <p className="mb-4 break-words">{commentData?.comment}</p>
    </div>
  );
};

export default CommentCard;
