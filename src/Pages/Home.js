import React from "react";
import MovieList from "../Components/MovieList";
import SearchField from "../Components/SearchField";

const Home = () => {
  return (
    <>
      <SearchField />
      <MovieList />
    </>
  );
};

export default Home;
