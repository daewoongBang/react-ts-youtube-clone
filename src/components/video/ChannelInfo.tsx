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
        <div className='flex items-center gap-2 my-4 mb-8'>
          <img
            className='w-10 h-10 rounded-full'
            src={data[0].snippet.thumbnails.default.url}
            alt={data[0].snippet.title}
          />
          <p className='text-lg font-medium ml-2'>{title}</p>
        </div>
      )}
    </>
  );
};

export default ChannelInfo;
