// TODO: Remove the question marks! but make sure no errors

import { Link } from 'react-router-dom';

// TODO: Add remaining and more details to cards
const BlogCard = ({ blogMeta }) => {
  return (
    <div className=" p-2 bg-[#F4f4f4] rounded-xl">
      <p className="text-sm mb-2">{blogMeta?.author}</p>
      <Link className="font-bold text-xl" to={`/blog/${blogMeta?.blogRef}`}>
        {blogMeta?.title}
      </Link>
      <p className="text-sm text-[#626262]">
        Nah I don't know what I'm talking about, go watch some tuts you absolute
        buffoon
      </p>
    </div>
  );
};

export default BlogCard;
