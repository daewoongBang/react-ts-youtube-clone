import { useLocation, useParams } from 'react-router-dom';

import ChannelInfo from 'components/video/ChannelInfo';
import RelatedVideos from 'components/video/RelatedVideos';
import VideoPlayer from 'components/video/Player';

const VideoDetail = () => {
  const { videoId = '' } = useParams();

  const {
    state: { video },
  } = useLocation();

  const { snippet } = video;

  return (
    <div>
      <article>
        <VideoPlayer videoId={videoId} />

        <div>
          <h2>{snippet.title}</h2>
          <ChannelInfo
            channelId={snippet.channelId}
            title={snippet.channelTitle}
          />
          <pre>{snippet.description}</pre>
        </div>
      </article>

      <section>
        <RelatedVideos videoId={snippet.channelId} />
      </section>
    </div>
  );
};

export default VideoDetail;
