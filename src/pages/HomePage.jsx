import FeaturedPhoto from '../components/home/FeaturedPhoto';
import HomeFeed from '../components/home/HomeFeed';
import News from '../components/home/News';
import { useAuthStore } from '../services/state/authStore';

const HomePage = () => {
  return (
    <div className="flex flex-col pr-0 pl-2 w-full items-center sm:px-2">
      <div className="flex max-w-5xl w-full">
        <div className="sm:basis-1/2 border-r border-gray-300 sm:pr-8 pr-2 sm:w-1/2 w-full">
          <HomeFeed />
        </div>
        <div className=" basis-1/2 pl-8 h-full sticky top-0 sm:block  hidden">
          <FeaturedPhoto />
          <News />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
