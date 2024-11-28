import BlogList from '../shared/BlogList';
import CategoyFilter from '../shared/CategoyFilter';
import SectionHeader from '../ui/SectionHeader';
import FeaturedPhoto from './FeaturedPhoto';

const HomeFeed = () => {
  return (
    <div>
      <SectionHeader headingText={'Student Blogs'} />
      {/* <CategoyFilter /> */}
      <div className="sticky top-0">
        <CategoyFilter />
      </div>
      <BlogList />
    </div>
  );
};

export default HomeFeed;
