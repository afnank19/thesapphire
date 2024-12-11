import React from 'react';

// TODO: Purify HTML and insert here!
const BlogContent = ({ content }) => {
  return (
    <div className="p-2">
      <p className="text-lg ">{content}</p>
    </div>
  );
};

export default BlogContent;
