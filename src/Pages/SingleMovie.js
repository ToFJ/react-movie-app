import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import Loading from "../Components/Loading";

const SingleMovie = () => {
  const { imdbID } = useParams();
  const { isLoading, error, fetchedData } = useFetch(`&i=${imdbID}`);

  const { Actors, Awards, Genre, Plot, Poster, Rated, Ratings, Released, Title, imdbRating } = fetchedData;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="m-10 xl:ml-80 md:object-cover md:flex ">
        <img className="flex justify-center items-center" src={Poster} alt={Title} />
        <div className="m-10 text-white ">
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Starring:</span> {Actors}
          </p>
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Genre:</span> {Genre}
          </p>
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Rated:</span> {Rated}
          </p>
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Date:</span> {Released}
          </p>
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Details:</span> {Plot}
          </p>
          <p className="mb-2 sm:block flex flex-col">
            <span className="text-cyan-300 text-xl underline">Awards:</span> {Awards}
          </p>
          <p className="mb-2 ">
            {Ratings.map((rating, index) => {
              return (
                <p className="mb-2 " key={index}>
                  <span className="text-cyan-300 text-xl underline">Ratings:</span> {rating.Source}
                  <span> {rating.Value}</span>
                </p>
              );
            })}
          </p>
          <p>
            <span className="text-cyan-300 text-xl underline">imdb Rating:</span> {imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
