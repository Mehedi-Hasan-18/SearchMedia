import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";
import { Link } from "react-router-dom";

const ResultGrid = () => {
  const { query, activeTab, error, loading, results } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getPhoto = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab == "videos") {
          let response = await fetchVideos(query, 1);
          data = response.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err));
      }
    };

    getPhoto();
  }, [query, activeTab]);

  if (error)
    return <h1 className="text-center text-red-500 text-xl mt-10">Error</h1>;

  if (loading)
    return (
      <h1 className="text-center text-gray-500 text-xl mt-10 animate-pulse">
        Loading...
      </h1>
    );

  return (
    <div className="p-4 md:p-8">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {results.map((item, idx) => (
          <a href={item.url}>
            <ResultCard key={idx} item={item} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResultGrid;
