import { useNavigate } from 'react-router-dom';

import { formatRelativeTime } from 'utils/date';

interface VideoCardProps {
  video: any;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { snippet, statistics } = video;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id || video.id.videoId}`);
  };

  return (
    <li className='w-1/5 cursor-pointer' onClick={handleClick}>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <div>
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
        <p>
          조회수 {statistics.viewCount} •{' '}
          {formatRelativeTime(snippet.publishedAt)}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;
