// TODO: Remove the question marks! but make sure no errors

import { Link } from 'react-router-dom';

// TODO: Add remaining and more details to cards
const BlogCard = ({ blogMeta }) => {
  return (
    <div className=" p-2 bg-[#F4f4f4] rounded-xl flex flex-col">
      <Link className="text-sm mb-2" to={`/profile/${blogMeta?.authorId}`}>
        {blogMeta?.author}
      </Link>
      <Link className="font-bold text-xl" to={`/blog/${blogMeta?.blogRef}`}>
        {blogMeta?.title}
      </Link>
      <p className="text-sm text-[#626262]">{blogMeta?.teaser}</p>
    </div>
  );
};

export default BlogCard;
