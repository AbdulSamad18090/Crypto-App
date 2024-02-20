import React, { useEffect } from "react";
import { getCoins } from "../Store/Slices/getCoinsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Coins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  const { coins, loading, error } = useSelector((state) => state.getCoinsSlice);
  console.log(coins)

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
              <div key={coin.id} className="border border-gray-600 rounded p-2 my-2 shadow-sm shadow-gray-500">
                <img src={coin.image} alt="img" width={"70px"} height={"70px"} className="rounded" />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Coins;
