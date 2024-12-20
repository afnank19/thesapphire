import { useNavigate } from 'react-router-dom';
import ShaderCanvas from '../components/shader/ShaderCanvas';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ShaderCanvas />
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col p-4 max-w-6xl w-full">
          <div className="flex justify-between items-center">
            <h1 className="font-news text-4xl italic my-8 mx-2">
              The Sapphire
            </h1>
            <button
              className="border-2 border-white rounded-full p-2 px-4 hover:bg-white hover:text-black transition-colors h-max"
              onClick={() => {
                navigate('/signin');
              }}
            >
              Sign In
            </button>
          </div>
          <div className="flex flex-col font-light text-4xl mt-32 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <p className="self-end">
              student{' '}
              <span className="font-news font-light italic mx-2">run</span>
            </p>
            <p className="">
              <span className="font-news font-light italic mx-2">
                Blog-site
              </span>{' '}
              where ideas
            </p>
            <p className="">
              <span className="font-news font-light italic mx-2">express</span>{' '}
              and{' '}
              <span className="font-news font-light italic mx-2">evolve,</span>
            </p>
            <p className="">always free</p>
          </div>
          <div className="flex gap-8 mt-16 mx-8 justify-center">
            <button
              className="text-black bg-white rounded-full md:p-4 p-2 hover:scale-105 transition-all "
              onClick={() => {
                navigate('/signup');
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
