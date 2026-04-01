import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center mt-6">
      <div className="flex bg-gray-100 p-1 rounded-full shadow-inner">
        {tabs.map((elem, idx) => {
          const isActive = activeTab === elem;

          return (
            <button
              key={idx}
              onClick={() => dispatch(setActiveTab(elem))}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-white shadow text-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }
                active:scale-95
              `}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;