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

  console.log(data);

  return (
    <>
      {isLoading && <Loading />}

      {error && <Error />}

      {data && (
        <ul className='flex flex-wrap gap-4'>
          {data.map((item: any) => (
            <VideoCard key={`video-${item.id}`} video={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
