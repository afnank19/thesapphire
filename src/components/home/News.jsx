import SectionHeader from '../ui/SectionHeader';
import NewsList from './NewsList';

const News = () => {
  return (
    <div>
      <SectionHeader headingText={'World at a glance'} />
      <NewsList />
    </div>
  );
};

export default News;
