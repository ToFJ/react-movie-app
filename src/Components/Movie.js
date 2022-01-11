import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ Title, Year, Poster }) => {
  return (
    <div className="m-4 pb-28relative">
      <img src={Poster} alt={Title} className="h-96 w-80 object-cover" />
    </div>
  );
};

export default Movie;
