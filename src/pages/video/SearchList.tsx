import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Loading from 'components/common/Loading';
import Error from 'components/common/Error';
import VideoCard from 'components/video/Card';

import { getSearchVideos } from 'apis/video';

const VideoSearchList = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  const { isLoading, data, error } = useQuery({
    queryKey: ['videos', query],
    queryFn: () => getSearchVideos(query || ''),
    enabled: !!query,
  });

  return (
    <>
      {isLoading && <Loading />}

      {error && <Error />}

      {data?.length > 0 ? (
        <div>
          {data.map((item: any) => (
            <VideoCard key={item.id.videoId} video={item} />
          ))}
        </div>
      ) : (
        <div>검색결과가 없습니다.</div>
      )}
    </>
  );
};

export default VideoSearchList;
