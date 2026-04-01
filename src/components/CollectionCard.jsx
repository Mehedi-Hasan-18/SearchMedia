import React from "react";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
    const handleDownload = async (e) => {
    e.stopPropagation();

    const response = await fetch(item.src);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${item.id}.jpg`;
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
  };
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
      {/* Media */}
      <div className="w-full h-56 overflow-hidden">
        {item.type === "photo" && (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}

        {item.type === "video" && (
          <video
            autoPlay
            loop
            muted
            src={item.src}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      {/* Overlay UI only */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-4">
        {/* Top buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => {
              dispatch(removeCollection(item));
            }}
            className="px-3 py-1 text-xs rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            Remove
          </button>

          <button
          onClick={handleDownload}
            className="px-3 py-1 text-xs rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            Download
          </button>
        </div>

        {/* Bottom title */}
        <div>
          <h2 className="text-sm text-white font-semibold line-clamp-2">
            {item.title || "Untitled"}
          </h2>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 flex justify-between items-center">
        <span className="text-xs text-gray-500 uppercase">{item.type}</span>
        <span className="text-xs text-gray-400 truncate max-w-30">
          {item.id}
        </span>
      </div>
    </div>
  );
};

export default CollectionCard;
