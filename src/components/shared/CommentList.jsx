import CommentCard from './CommentCard';

const CommentList = ({ pages }) => {
  return (
    <div className="flex flex-col gap-4  p-2">
      {pages.map((page) => {
        return page.map((comment) => {
          return <CommentCard commentData={comment} />;
        });
      })}
    </div>
  );
};

export default CommentList;
