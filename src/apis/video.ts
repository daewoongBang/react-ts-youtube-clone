import axios from 'axios';

import * as mock from './mock/video';

const useMockApi = process.env.REACT_APP_USE_MOCK_API === 'true';

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export const getPopularVideos = useMockApi
  ? mock.getPopularVideos
  : async () =>
      await httpClient
        .get('videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 40,
            regionCode: 'KR',
          },
        })
        .then((res) => res.data.items);

export const getSearchVideos = useMockApi
  ? mock.getSearchVideos
  : async (query: string) =>
      await httpClient
        .get('search', {
          params: {
            part: 'snippet',
            q: query,
            maxResults: 40,
          },
        })
        .then((res) => res.data.items);

export const getChannelInfo = useMockApi
  ? mock.getChannelInfo
  : async (channelId: string) =>
      await httpClient
        .get('channels', {
          params: {
            part: 'snippet',
            id: channelId,
          },
        })
        .then((res) => res.data.items);

export const getRelatedVideos = useMockApi
  ? mock.getRelatedVideos
  : async () =>
      await httpClient
        .get('videos', {
          params: {
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 40,
            regionCode: 'KR',
          },
        })
        .then((res) => res.data.items);
