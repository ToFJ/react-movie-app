import React, { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";

const SearchField = () => {
  const { setQuery, error } = useGlobalContext();
  const searchRef = useRef("");

  const handleSubmit = e => {
    e.preventDefault();
    if (searchRef.current.value === "") {
      setQuery("batman");
    } else {
      setQuery(searchRef.current.value);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mt-10 " onSubmit={handleSubmit}>
      <form className="flex text-2xl border-black ">
        <input
          className="bg-[#1f1f22] px-1 w-full lg:w-96 rounded-lg border-2 border-cyan-300 placeholder:italic placeholder:text-2xl placeholder:text-cyan-300 text-cyan-300"
          type="text"
          name="search"
          placeholder="Search Movie"
          ref={searchRef}
          onChange={e => searchRef.value}
        />
      </form>
      <p className="text-red-500">{error.show ? error.msg : ""}</p>
    </div>
  );
};

export default SearchField;
