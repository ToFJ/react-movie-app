import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ Title, Year, Poster, imdbID }) => {
  return (
    <div className="m-4 pb-8 relative group cursor-pointer">
      <img src={Poster} alt={Title} className="h-96 w-80 object-cover " />
      <div className="absolute text-white bottom-8 p-4 w-80 isolate bg-opacity-70 bg-slate-900 hidden group-hover:block ">
        <h3>{Title}</h3>
        <p>{Year}</p>
        <Link to={`/movie/${imdbID}`}>
          <button
            onClick={() => console.log(imdbID)}
            className="cursor-pointer text-black rounded-xl mt-2 py-1 px-4 bg-cyan-400 hover:bg-cyan-300"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie;
