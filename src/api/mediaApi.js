import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;



export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  const data = res.data.results;
  return data;
};



export const fetchVideos = async (query, page, per_page=20) => {
  const res = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  const data = res.data.videos;
  return data;
};
