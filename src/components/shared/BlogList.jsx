import BlogCard from './BlogCard';

// Should iterate over the cards
// Minor prop drilling, but good separation of concerns
// acceptable
const BlogList = ({ pages }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#F1F1F1] p-2 rounded-lg">
      {pages.map((page) => {
        return page.map((blog) => {
          return <BlogCard key={blog.id} blogMeta={blog} />;
        });
      })}
    </div>
  );
};

export default BlogList;
