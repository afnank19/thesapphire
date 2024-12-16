const NewsCard = ({ title, abstract, url }) => {
  return (
    <div>
      <a
        className="font-crimson  mb-2 text-xl hover:underline"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p className="text-sm text-[#555555] pb-4 mb-3 border-b-2 border-gray-300">
        {abstract}
      </p>
    </div>
  );
};

export default NewsCard;
