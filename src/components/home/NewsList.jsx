import NewsCard from '../shared/NewsCard';

const NewsList = ({ data }) => {
  return (
    <div className="rounded-lg p-4 bg-[#E7E7E7]">
      {data.news.map((newsItem, i) => {
        return (
          <NewsCard
            key={i}
            title={newsItem.title}
            abstract={newsItem.abstract}
            url={newsItem.url}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
