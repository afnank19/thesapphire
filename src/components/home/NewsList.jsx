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
      <div className="flex text-sm text-gray-500 items-center gap-2">
        <NyTimesLogo size={'1.5rem'} />
        <p>Powered by New York Times</p>
      </div>
    </div>
  );
};

export default NewsList;
