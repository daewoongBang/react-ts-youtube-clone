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
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <VideoPlayer videoId={videoId} />

        <div className='p-4'>
          <h2 className='text-2xl font-bold'>{snippet.title}</h2>
          <ChannelInfo
            channelId={snippet.channelId}
            title={snippet.channelTitle}
          />
          <pre className='whitespace-pre-wrap'>{snippet.description}</pre>
        </div>
      </article>

      <section className='basis-2/6'>
        <RelatedVideos videoId={snippet.channelId} />
      </section>
    </section>
  );
};

export default VideoDetail;
