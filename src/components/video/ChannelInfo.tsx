import { useQuery } from '@tanstack/react-query';

import { getChannelInfo } from 'apis/video';
import Error from 'components/common/Error';
import Loading from 'components/common/Loading';

interface ChannelInfoProps {
  channelId: string;
  title: string;
}

const ChannelInfo = ({ channelId, title }: ChannelInfoProps) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['channelInfo', channelId],
    queryFn: () => getChannelInfo(channelId),
  });

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error />}
      {data && (
        <div>
          <img
            src={data[0].snippet.thumbnails.default.url}
            alt={data[0].snippet.title}
          />
          <p>{title}</p>
        </div>
      )}
    </>
  );
};

export default ChannelInfo;
