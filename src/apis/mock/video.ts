import axios from 'axios';

export const getPopularVideos = async () =>
  await axios.get('mock/videos/popular.json').then((res) => res.data.items);

export const getSearchVideos = async () =>
  await axios.get(`mock/videos/search.json`).then((res) => res.data.items);

export const getChannelInfo = async () =>
  await axios.get(`/mock/videos/channel.json`).then((res) => res.data.items);

export const getRelatedVideos = async () =>
  await axios.get(`/mock/videos/related.json`).then((res) => res.data.items);
