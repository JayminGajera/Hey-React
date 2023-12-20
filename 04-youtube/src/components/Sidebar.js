import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { LuUserSquare2 } from "react-icons/lu";
import { RiHistoryLine } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsFire } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";


const Sidebar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isOpen) return null;

  return (
    <div className="h-fit w-2/3 md:w-1/6 p-3 shadow-lg rounded-lg absolute md:relative bg-slate-200 md:bg-transparent ">
      <ul className="flex flex-col gap-1 ">
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <GoHome className="text-2xl" />
              <p>Home</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <SiYoutubeshorts className="text-2xl" />
              <p>Shorts</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <MdOutlineSubscriptions className="text-2xl" />
              <p>Subscriptions</p>
            </div>
          </Link>
        </li>
      </ul>
      <h1 className="font-bold pt-5 mb-2">
        <div className="flex gap-x-2 items-center">
          <p className="text-lg">You</p> <FaAngleRight className="mt-1" />
        </div>
      </h1>
      <ul className="flex flex-col gap-1">
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <LuUserSquare2 className="text-2xl" />
              <p>Your Channel</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <RiHistoryLine className="text-2xl" />
              <p>History</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <RiVideoLine className="text-2xl" />
              <p>Your Videos</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <MdOutlineWatchLater className="text-2xl" />
              <p>Watch Later</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <AiOutlineLike className="text-2xl" />
              <p>Liked Videos</p>
            </div>
          </Link>
        </li>
      </ul>
      <h1 className="font-bold pt-5 mb-3">Explore</h1>
      <ul className="flex flex-col gap-1">
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <BsFire className="text-2xl" />
              <p>Trending</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <HiOutlineShoppingBag className="text-2xl" />
              <p>Shopping</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <IoMusicalNoteOutline className="text-2xl" />
              <p>Music</p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-slate-200 p-2 rounded-lg">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <BiMoviePlay className="text-2xl" />
              <p>Movies</p>
            </div>
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default Sidebar;
