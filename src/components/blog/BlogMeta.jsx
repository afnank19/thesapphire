import React from 'react';

const BlogMeta = () => {
  return (
    <div className="flex flex-col items-center gap-1 p-2 mt-6">
      <div className="w-full">
        <p className="text-sm">Afnan Khalid</p>
        <h1 className="font-bold text-3xl">Writing a TUI in GO!</h1>
        <div className="flex justify-between text-sm text-[#838383]">
          <p>5 min read</p>
          <p>26 November 2024</p>
        </div>
      </div>
      <img
        className="mt-6 rounded-xl w-full"
        src="https://plus.unsplash.com/premium_photo-1730669105180-6a6eec937c74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <p className="w-full text-sm text-gray-400 italic text-left my-1">
        Photo by pexels
      </p>
      {/* bruh */}
    </div>
  );
};

export default BlogMeta;
