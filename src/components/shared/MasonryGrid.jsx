const MasonryGrid = ({ images, setOpen, setImage }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 overflow-y-auto p-2">
      {images?.map((image, i) => {
        return (
          <img
            key={i}
            className="w-full object-cover rounded-lg hover:scale-105 transition-all"
            src={image.src.tiny}
            onClick={() => {
              setImage(image.src.large);
              setOpen(false);
            }}
          />
        );
      })}
    </div>
  );
};

export default MasonryGrid;
