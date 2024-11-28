import BlogCard from './BlogCard';

// Should iterate over the cards
const BlogList = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#F1F1F1] p-2 rounded-lg">
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default BlogList;
