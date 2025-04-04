import { useNavigate } from 'react-router-dom';

import { formatRelativeTime } from 'utils/date';
import { formatViews } from 'utils/string';

interface VideoCardProps {
  video: any;
  type?: 'list' | 'search';
}

const VideoCard = ({ video, type }: VideoCardProps) => {
  const { snippet, statistics } = video;

  const navigate = useNavigate();

  const isList = type === 'list';
  const isSearch = type === 'search';

  const handleClick = () => {
    navigate(`/watch/${video.id || video.id.videoId}`, { state: { video } });
  };

  return (
    <li
      className={`${isList || isSearch ? 'flex gap-1 m-2' : ''} cursor-pointer`}
      onClick={handleClick}
    >
      <img
        className={`${
          isList ? 'w-60 mr-2' : isSearch ? 'w-1/3' : 'w-full'
        } rounded-md`}
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
      />
      <div>
        <p className='font-semibold line-clamp-2'>{snippet.title}</p>
        <p className='text-sm opacity-80'>{snippet.channelTitle}</p>
        <p className='text-sm opacity-80'>
          {statistics && `조회수 ${formatViews(statistics.viewCount)} • `}
          {formatRelativeTime(snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;
