import React, { useEffect } from "react";
import { getCoins } from "../Store/Slices/getCoinsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { DefaultPagination } from "./Pagination";

const Coins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const { coins, loading, error } = useSelector((state) => state.getCoinsSlice);
  console.log(coins);

  return (
    <div className="bg-black text-white">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <div className="p-2">
          {coins &&
            coins.map((coin) => (
              <div
                key={coin.id}
                className="grid sm:grid-cols-4 grid-cols-2 justify-between items-center border border-gray-600 rounded p-2 my-2 shadow-sm shadow-gray-500"
              >
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
                  <h1 className="text-gray-600">USD {coin.current_price}</h1>
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
            ))}
          {/* <DefaultPagination /> */}
        </div>
      )}
    </div>
  );
};

export default Coins;
