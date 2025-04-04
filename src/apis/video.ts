export const getPopularVideos = async () =>
  await fetch('data/videos/popular.json')
    .then((res) => res.json())
    .then((data) => data.items);

export const getSearchVideos = async (query: string) =>
  await fetch(`data/videos/search.json`)
    .then((res) => res.json())
    .then((data) => data.items);
