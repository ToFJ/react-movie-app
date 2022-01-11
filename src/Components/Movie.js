import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ Title, Year, Poster, imdbID }) => {
  return (
    <div className="m-4 pb-8 relative group ">
      <Link to={`/movie/${imdbID}`}>
        <img src={Poster} alt={Title} className="h-96 w-80 object-cover cursor-pointer" />
        <div className="absolute text-white bottom-8 p-4 w-full isolate bg-opacity-70 bg-slate-900 lg:opacity-0 group-hover:opacity-100 xl:translate-y-4 xl:group-hover:-translate-y-0 transition-all ease-in-out duration-[300ms]  ">
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
      </Link>
    </div>
  );
};

export default Movie;
