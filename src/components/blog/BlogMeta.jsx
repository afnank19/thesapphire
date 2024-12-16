import React from 'react';

const BlogMeta = ({ blogMeta }) => {
  const displayDate = new Date(blogMeta.displayDate);

  return (
    <div className="flex flex-col items-center gap-1 p-2 mt-6">
      <div className="w-full">
        <p className="text-sm">{blogMeta?.author}</p>
        <h1 className="font-bold text-3xl">{blogMeta?.title}</h1>
        <div className="flex justify-between text-sm text-[#838383]">
          <p>{blogMeta.timeToRead} read</p>
          <p>{displayDate.toDateString()}</p>
        </div>
      </div>
      <img className="mt-6 rounded-xl w-full" src={blogMeta?.imgUrl} />
      <p className="w-full text-sm text-gray-400 italic text-left my-1">
        Photo by pexels
      </p>
      {/* bruh */}
    </div>
  );
};

export default BlogMeta;
