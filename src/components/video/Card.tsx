interface VideoCardProps {
  video: any;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return <div>{video.snippet.title}</div>;
};

export default VideoCard;
