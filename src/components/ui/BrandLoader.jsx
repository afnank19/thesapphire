const BrandLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-1 animate-spin">
      <div className="w-4 h-4 rounded-full bg-black animate-pulse"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-pulse"></div>
    </div>
  );
};

export default BrandLoader;
