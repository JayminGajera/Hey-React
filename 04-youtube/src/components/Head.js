import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggelMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion,setSuggestion] = useState([]);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //API call

    //make an api call after every key press
    //but the difference between 2 api call is < 200ms
    //decline the api call

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestion(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
    console.log('s',json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1]
    }));

  };

  const handleToggel = () => {
    dispatch(toggelMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className="flex items-center col-span-1">
        <RxHamburgerMenu
          onClick={handleToggel}
          className="text-2xl font-bold cursor-pointer"
        />
        <img
          className="h-6 mx-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
          alt="yt logo"
        />
      </div>
      <div className="col-span-10 flex">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 border border-black p-1 rounded-l-full px-4 outline-none"
          type="search"
          placeholder="Search"
        />
        <div className="flex place-items-center border border-black p-1 px-5 rounded-r-full cursor-pointer bg-gray-200">
          <IoIosSearch />
        </div>

        <div className="absolute mt-10 px-2 w-[30rem] rounded-lg bg-white shadow-lg">
          <ul>
           {
            suggestion?.map((s) => <li key={s} className="p-2 shadow-sm hover:bg-gray-100 rounded-lg flex items-center gap-x-2"><IoIosSearch /> {s}</li>)
           }
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <FaRegUserCircle className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
