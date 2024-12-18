// TODO: Remove the question marks! but make sure no errors

import { Link } from 'react-router-dom';

// TODO: Add remaining and more details to cards
const BlogCard = ({ blogMeta }) => {
  const displayDate = new Date(blogMeta.displayDate);

  return (
    <div className=" p-2 bg-[#F4f4f4] rounded-xl flex flex-col">
      <Link
        className="text-sm mb-2 hover:underline"
        to={`/profile/${blogMeta?.authorId}`}
      >
        {blogMeta?.author}
      </Link>
      <Link className="font-bold text-xl" to={`/blog/${blogMeta?.blogRef}`}>
        {blogMeta?.title}
      </Link>
      <p className="text-sm text-[#626262]">{blogMeta?.teaser}</p>
      <div className="text-sm text-gray-400 my-2 flex justify-between">
        <p>{displayDate.toDateString()}</p>
        <p>{blogMeta?.timeToRead} read</p>
      </div>
    </div>
  );
};

export default BlogCard;
