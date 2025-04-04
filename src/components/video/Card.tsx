import { useNavigate } from 'react-router-dom';

import { formatRelativeTime } from 'utils/date';
import { formatViews } from 'utils/string';

interface VideoCardProps {
  video: any;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { snippet, statistics } = video;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id || video.id.videoId}`, { state: { video } });
  };

  return (
    <li className='w-full cursor-pointer' onClick={handleClick}>
      <img
        className='rounded-md'
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
