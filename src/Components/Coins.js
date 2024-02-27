import React, { useEffect, useState } from "react";
import { getCoins } from "../Store/Slices/getCoinsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Coins = () => {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    dispatch(getCoins(currency));
  }, [dispatch, currency]);

  const { coins, loading, error } = useSelector((state) => state.getCoinsSlice);

  const searchText = useSelector((state) =>
    state.searchTextSlice.searchText.toLowerCase()
  );

  // Filter coins based on searchText
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchText)
  );

  return (
    <div className="bg-black text-white">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <div className="p-2">
          <div className=" my-4">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  type: "spring",
                  damping: 15,
                },
              }}
              className="text-yellow-500 font-bold text-[30px]"
            >
              All Coins
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.1,
                  type: "spring",
                  damping: 15,
                },
              }}
              className=" flex gap-4 mt-4"
            >
              <button
                className="text-white px-1 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={() => {
                  setCurrency("usd");
                }}
              >
                USD
              </button>
              <button
                className="text-white px-1 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={() => {
                  setCurrency("pkr");
                }}
              >
                PKR
              </button>
            </motion.div>
          </div>
          {filteredCoins.length === 0 ? (
            <div className="flex justify-center items-center">
              <h1 className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                No Coins
              </h1>
            </div>
          ) : (
            filteredCoins.map((coin, i) => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/coins/${coin.id}`}>
                  <div className="grid sm:grid-cols-4 grid-cols-2 justify-between items-center border bg-gray-900 border-gray-600 rounded p-2 my-2 shadow-sm shadow-gray-500">
                    <div className="flex items-center gap-4 mx-2">
                      <img
                        src={coin.image}
                        alt="img"
                        width={"70px"}
                        height={"70px"}
                        className="rounded"
                      />
                      <h1 className=" text-lg">{coin.name}</h1>
                    </div>
                    <div className="sm:text-center text-right mx-2 ">
                      <h1 className="text-gray-600">{coin.symbol}</h1>
                    </div>
                    <div className="sm:text-center text-left m-2">
                      <h1 className="text-gray-600">
                        {currency.toUpperCase()} {coin.current_price}
                      </h1>
                    </div>
                    <div className="text-right">
                      <h1
                        className={`${
                          coin.price_change_percentage_24h < 0
                            ? "text-red-400"
                            : "text-green-400"
                        } mx-2`}
                      >
                        {coin.price_change_percentage_24h.toFixed(4)}%
                      </h1>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Coins;
