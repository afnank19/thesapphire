const BrandLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="animate-spin flex gap-1">
        <div className="w-4 h-4 rounded-full bg-black dark:bg-white animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-pulse"></div>
      </div>
    </div>
  );
};

export default BrandLoader;
