import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

const SearchField = () => {
  const { setQuery } = useGlobalContext();
  const searchRef = useRef("");

  const handleSubmit = e => {
    setQuery(searchRef.current.value);
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center mt-10 " onSubmit={handleSubmit}>
      <form className="flex text-2xl border-black ">
        <input
          className="w-full lg:w-96 rounded-lg border-2 border-black placeholder:italic placeholder:text-2xl"
          type="text"
          name="search"
          placeholder="Search Movie"
          ref={searchRef}
          onChange={e => searchRef.value}
        />
      </form>
    </div>
  );
};

export default SearchField;
