const NewsCard = ({ title, abstract, url }) => {
  return (
    <div>
      <a
        className="font-news   mb-2 text-lg hover:underline"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <p className="text-sm text-[#555555] pb-4 mb-3 border-b border-gray-300 dark:border-gray-700">
        {abstract}
      </p>
    </div>
  );
};

export default NewsCard;
