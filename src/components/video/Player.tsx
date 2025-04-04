interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  return (
    <iframe
      width='100%'
      height='640'
      src={`https://www.youtube.com/embed/${videoId}`}
      title='YouTube video player'
      allowFullScreen
    />
  );
};

export default VideoPlayer;
