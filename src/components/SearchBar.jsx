import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <form
        onSubmit={submitHandler}
        className="flex w-full max-w-2xl bg-white shadow-lg rounded-full overflow-hidden border border-gray-200"
      >
        <input
          className="flex-1 px-6 py-4 outline-none text-gray-700 placeholder-gray-400"
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          placeholder="Search photos, videos..."
        />

        <button
          className="px-6 bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:opacity-90 active:scale-95 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;