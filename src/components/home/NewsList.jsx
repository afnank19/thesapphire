import { NyTimesLogo } from '@phosphor-icons/react';
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
      <div className="flex justify-between text-sm text-gray-500 items-center gap-2">
        <p>Powered by New York Times</p>
        <NyTimesLogo size={'1.5rem'} />
      </div>
    </div>
  );
};

export default NewsList;
