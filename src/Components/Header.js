import React from "react";
import { Link } from "react-router-dom";
import { FaEthereum } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-sm shadow-gray-500">
      <div className="flex justify-between items-center p-4">
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
        <div className="flex justify-center items-center transition-all">
          <Link
            to={"/"}
            className="hover:text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text px-2"
          >
            Exchanges
          </Link>
          <Link
            to={"/coins"}
            className="hover:text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text px-2"
          >
            Coins
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
