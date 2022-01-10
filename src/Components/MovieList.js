import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Movie from "./Movie";
const MovieList = () => {
  const { fetchedData, isLoading } = useGlobalContext();
  const { Search } = fetchedData;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap my-12 mx-12">
      {Search.map(item => {
        const { imdbID } = item;

        return <Movie key={imdbID} {...item} />;
      })}
    </div>
  );
};

export default MovieList;
