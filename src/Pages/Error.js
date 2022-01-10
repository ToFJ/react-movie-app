import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-10 xl:px-96 lg:px-48 my-20 flex justify-center items-center flex-col text-6xl">
      <p>Opps! Looks like u got lost</p>
      <Link to="/">
        <button className="mt-24 text-4xl cursor-pointer border rounded-xl text-2xl py-1 px-4 bg-cyan-400 hover:bg-cyan-300 ease-in-out duration-200">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
