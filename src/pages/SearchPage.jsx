import BlogList from '../components/shared/BlogList';
import CategoyFilter from '../components/shared/CategoyFilter';
import SectionHeader from '../components/ui/SectionHeader';

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="max-w-xl w-full p-2">
        <div className="flex gap-2">
          <SectionHeader headingText={'Results for'} color={'text-gray-400'} />
          <h1 className="font-bold text-2xl mb-4">Vercel</h1>
        </div>
        <div className="sticky top-0">
          <CategoyFilter />
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default SearchPage;
