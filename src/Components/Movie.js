import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ Title, Year, Poster }) => {
  return (
    <div className="m-4 pb-28 border border-gray-900 rounded-b-lg relative">
      <img src={Poster} alt={Title} className="" />
      <div className="absolute -bottom-0 text-xl">
        <h2>{Title}</h2>
        <p>{Year}</p>
      </div>
      <button className="absolute -top-0 text-lg cursor-pointer py-1 px-4 bg-cyan-400 hover:bg-cyan-300 ease-in-out duration-200">
        Details
      </button>
    </div>
  );
};

export default Movie;
