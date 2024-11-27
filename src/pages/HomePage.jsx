import Extra from '../components/home/Extra';
import FeaturedPhoto from '../components/home/FeaturedPhoto';
import News from '../components/home/News';

const HomePage = () => {
  return (
    <div className="flex flex-col pr-0 pl-2 w-full items-center sm:px-2">
      <div className="flex gap-8 max-w-5xl w-full">
        <div className="sm:basis-1/2 border-r border-gray-300 sm:pr-8 pr-2 w-full">
          <div>
            {/* Make a the card component here */}
            <h1>Student Blogs</h1>
            <div>
              <p>Software Arts Desigin</p>
            </div>
          </div>
        </div>
        <div className=" basis-1/2 h-full sticky top-0 sm:block  hidden ">
          <FeaturedPhoto />
          <News />
          {/* <Extra /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
