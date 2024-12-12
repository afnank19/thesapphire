import SectionHeader from '../ui/SectionHeader';
import NewsList from './NewsList';
import { useFetchNews } from '../../hooks/useFetchNews';

const News = () => {
  const { data, error, isPending, isError } = useFetchNews();

  return (
    <div>
      <SectionHeader headingText={'World at a glance'} />
      {isPending ? (
        <div>Loading Spinner</div>
      ) : isError ? (
        <div>Oops, an error occured</div>
      ) : (
        <NewsList data={data} />
      )}
    </div>
  );
};

export default News;
