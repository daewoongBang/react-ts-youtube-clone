import { useQuery } from '@tanstack/react-query';

import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import VideoCard from 'components/video/Card';

import { getPopularVideos } from 'apis/video';

const Home = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['videos', 'popular'],
    queryFn: () => getPopularVideos(),
  });

  return (
    <>
      {isLoading && <Loading />}

      {error && <Error />}

      {data && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {data.map((item: any) => (
            <VideoCard key={`video-${item.id}`} video={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
