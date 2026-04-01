import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative text-center pt-10 px-4">

      {/* Buttons container */}
      <div className="absolute right-4 top-6 md:right-10 flex gap-3">
        <Link
          to="/"
          className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full shadow hover:bg-gray-200 transition active:scale-95"
        >
          Home
        </Link>

        <Link
          to="/collection"
          className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full shadow hover:bg-gray-200 transition active:scale-95"
        >
          Collection
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Media Search
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 text-sm md:text-base">
        Search high-quality photos and videos instantly
      </p>
    </div>
  );
};

export default Navbar;