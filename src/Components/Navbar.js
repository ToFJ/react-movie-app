import React from "react";
import { Link } from "react-router-dom";
import logo512 from "../images/logo512.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="shadow shadow-gray-400 flex justify-between items-center py-2 text-2xl text-white">
      <Link to="/">
        <div className="flex">
          <img src={logo512} alt="logo" className="inline w-10 ml-10 mr-2" />
          <h1 className="cursor-pointer">MovieDB</h1>
        </div>
      </Link>
      <div className="flex px-10 ">
        <ul className="flex mr-26 px-5 ">
          <li className="px-2 mx-2 cursor-pointer hover:text-cyan-400 ease-in-out duration-200 hidden md:block">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 ml-2 mr-12 cursor-pointer hover:text-cyan-400 ease-in-out duration-200 hidden md:block">
            <Link to="/about">About</Link>
          </li>
          <li className=" ml-4 cursor-pointer text-black rounded-xl text-xl py-1 px-4 bg-cyan-400 hover:bg-cyan-300 ease-in-out duration-200 hidden md:block">
            <Link to="/about">Log In</Link>
          </li>
          <li className=" ml-2 cursor-pointer text-black rounded-xl text-xl py-1 px-4 bg-cyan-400 hover:bg-cyan-300 ease-in-out duration-200 hidden md:block">
            <Link to="/about">Sign Up</Link>
          </li>
          <li className="md:hidden -mr-6 text-cyan-400 cursor-pointer text-4xl ease-in-out duration-200">
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
