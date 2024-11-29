import SectionHeader from '../ui/SectionHeader';

const FeaturedPhoto = () => {
  return (
    <div className="mb-4">
      <SectionHeader headingText={'Featured Photo of the day'} />
      <img
        className="rounded-xl mb-1"
        src="https://plus.unsplash.com/premium_photo-1730669105180-6a6eec937c74?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <p className="italic text-xs text-gray-400">Photo from pexels</p>
    </div>
  );
};

export default FeaturedPhoto;
