import React from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../Store/Slices/searchTextSlice";
import { MdOutlineCancel } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.searchTextSlice.searchText);
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-sm shadow-gray-500">
      <div className="flex justify-between items-center px-4 py-2">
        <Link to={"/"}>
          <div className="flex justify-center items-center">
            <h1>
              <span className=" font-thin text-yellow-400">Coin</span>
              <span className="font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                Verse
              </span>
            </h1>
            <FaEthereum className="text-[20px] text-yellow-400" />
          </div>
        </Link>
        <div className="hidden sm:flex items-center w-60 border border-gray-500 rounded bg-gray-200 text-black">
          <input
            type="text"
            placeholder="Search"
            className=" w-full bg-transparent focus:outline-none px-2 py-1"
            value={searchText}
            onChange={(e) => {
              dispatch(setSearchText(e.target.value));
            }}
          />
          <MdOutlineCancel
            className={`text-[20px] mx-2 ${
              searchText !== "" ? " cursor-pointer" : "hidden"
            }`}
            onClick={() => {
              dispatch(setSearchText(""));
            }}
          />
        </div>
        <div className="flex justify-center items-center gap-4 transition-all">
          <Link
            to={"/"}
            className="hover:text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
          >
            Exchanges
          </Link>
          <Link
            to={"/coins"}
            className="hover:text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text"
          >
            Coins
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="sm:hidden flex items-center sm:w-60 mb-4 mx-4 w-full border border-gray-500 rounded bg-gray-200 text-black">
          <input
            type="text"
            placeholder="Search"
            className=" w-full bg-transparent focus:outline-none px-2 py-1"
            value={searchText}
            onChange={(e) => {
              dispatch(setSearchText(e.target.value));
            }}
          />
          <MdOutlineCancel
            className={`text-[20px] mx-2 ${
              searchText !== "" ? " cursor-pointer" : "hidden"
            }`}
            onClick={() => {
              dispatch(setSearchText(""));
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
