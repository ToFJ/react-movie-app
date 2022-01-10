import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchField = () => {
  return (
    <div className="flex">
      <form className="flex text-3xl border border-2 border-black ">
        <input type="text" name="search" placeholder="Your Movie" />
      </form>
    </div>
  );
};

export default SearchField;
