import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mx-10 xl:px-96 lg:px-48 my-20 flex justify-center items-center flex-col text-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sapiente. Laboriosam deleniti quis, aut velit
        amet voluptas eligendi officia reprehenderit commodi cum repellendus aliquid exercitationem sunt quisquam
        molestias veritatis minima sint aliquam accusantium dicta quaerat molestiae sed odit nobis! Consequuntur labore
        id repudiandae perspiciatis dignissimos, obcaecati quibusdam amet provident odio?
      </p>
      <p className="mt-10 flex justify-center ">
        Simple practice project with the API provided by
        <span className="underline underline-offset-1 hover:text-cyan-600 px-1">
          <a href="https://www.omdbapi.com">OMDb API</a>
        </span>
      </p>
      <Link to="/">
        <button className="mt-10 flex justify-center cursor-pointer text-black rounded-xl text-xl py-1 px-4 bg-cyan-400 hover:bg-cyan-300 ease-in-out duration-200">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default About;
