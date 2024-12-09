// TODO: Remove the question marks! but make sure no errors
// TODO: Add remaining and more details to cards
const BlogCard = ({ blogMeta }) => {
  return (
    <div className=" p-2 bg-[#F4f4f4] rounded-xl">
      <p className="text-sm mb-2">{blogMeta?.author}</p>
      <h2 className="font-bold text-xl">{blogMeta?.title}</h2>
      <p className="text-sm text-[#626262]">
        Nah I don't know what I'm talking about, go watch some tuts you absolute
        buffoon
      </p>
    </div>
  );
};

export default BlogCard;
