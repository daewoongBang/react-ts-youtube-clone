import { useSearchParams } from 'react-router-dom';

const VideoSearchList = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  return <div>{!!query ? `Search: ${query}` : '검색결과가 없습니다.'}</div>;
};

export default VideoSearchList;
