import React from "react";
import { useSelector } from "react-redux";
import ResultCard from "../components/ResultCard";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {collection.map((item) => (
        <CollectionCard item={item} />
      ))}
    </div>
  );
};

export default CollectionPage;
