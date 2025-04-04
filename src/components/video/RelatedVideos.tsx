import { useQuery } from '@tanstack/react-query';
import { getRelatedVideos } from 'apis/video';

import Error from 'components/common/Error';
import Loading from 'components/common/Loading';
import VideoCard from './Card';

interface RelatedVideosProps {
  videoId: string;
}

const RelatedVideos = ({ videoId }: RelatedVideosProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['videos', 'related', videoId],
    queryFn: () => getRelatedVideos(),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div>
      {isLoading && <Loading />}
      {error && <Error />}
      {data && (
        <ul>
          {data.map((item: any) => (
            <VideoCard key={`video-${item.id}`} video={item} type='list' />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RelatedVideos;
