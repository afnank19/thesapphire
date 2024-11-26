import BlogContent from '../components/blog/BlogContent';
import BlogFooter from '../components/blog/BlogFooter';
import BlogMeta from '../components/blog/BlogMeta';

// TODO: Fetch blog data as custom hook from the API
// Send the data as props to respective components
const BlogPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <Navbar /> to be made, but it doesn't go here*/}
      <div className="max-w-3xl p-2">
        <BlogMeta />
        <BlogContent />
        <BlogFooter />
      </div>
    </div>
  );
};

export default BlogPage;
