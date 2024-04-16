import React, { useEffect } from "react";
import navicon from "../images/hamburger.png";
import heart from "../images/heart.png";
import search from "../images/search.png";
import location from "../images/location.png";
import right from "../images/right.png";
import person from "../images/Person.png";
import { Bars3Icon } from "@heroicons/react/16/solid";
const NavBar = () => {
  useEffect(() => {
    const searchInput = document.querySelector(".search");
    let r = 0;
    const handleSearch = () => {
      if (r == 0) {
        searchInput.classList.add("md:border-2", "md:border-[#989090]");
        r = 1;
      } else {
        searchInput.classList.remove("md:border-2", "md:border-[#989090]");
        r = 0;
      }
    };
    searchInput.addEventListener("click", handleSearch);

    return () => {
      // Cleanup: Remove event listener when component unmounts
      searchInput.removeEventListener("click", handleSearch);
    };
  }, []);
  return (
    <div className="flex flex-col text-[#989090] mb-5 fixed w-full bg-white z-50">
      <div className="flex pt-4 items-center justify-evenly text-[#989090]">
        <h1 className="flex justify-start text-red-500 font-bold text-xl   md:mr-20 md:ml-8">
          BookUsNow
        </h1>
        <button className="px-6 py-3 mr-2 bg-black flex justify-center items-center text-white rounded-md font-semibold md:hidden">
          <Bars3Icon className=" w-4 h-3 mr-1" /> Categories
        </button>
        <div className="flex relative w-1/2 search md:mr-2">
          <input
            type="text"
            className=" mr-2 px-2  py-3 outline-none border-2 border-[#989090]  w-full rounded-md md:border-none  md:placeholder-red-500 md:placeholder-opacity-0 "
            placeholder="DJI Phantom"
          />
          <img
            src={search}
            alt="search"
            className="w-4 absolute top-1/3 right-4  "
          />
        </div>
        <div className="flex justify-end">
          <span className="mr-4 flex justify-evenly items-center ">
            <img src={heart} alt="heart" className=" w-4 h-4 mr-1" />{" "}
            <span className="md:hidden">Favorites</span>
          </span>
          <button className="border-2 border-[#989090] px-6 py-3 rounded-md lg:hidden">
            Sign In
          </button>
          <span className=" w-7 hidden lg:flex md:mr-2">
            <img src={person} alt="person" className="w-full" />
          </span>
        </div>
      </div>
      <div className="flex  justify-start mt-7 md:flex-col md:leading-8 md:mt-2 mb-4">
        <div className="flex mr-20 items-center">
          <img src={location} alt="location" className="w-4 h-6 mr-5 ml-6" />{" "}
          <span className="mr-4">Mumbai,India</span>
          <img src={right} alt="right" className="w-4 h-6" />
        </div>
        <div className=" w-full">
          <ul className="  flex  justify-evenly list-none   md:leading-8 md:overflow-x-scroll w-full scroll-smooth scrolling">
            <li className="mr-3">LiveShows</li>
            <li className="mr-3">Streams</li>
            <li className="mr-3">Movies</li>
            <li className="mr-3">Plays</li>
            <li className="mr-3">Events</li>
            <li className="mr-3">Sports</li>
            <li className="mr-3">Activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
