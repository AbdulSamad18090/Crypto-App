import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetail } from "../Store/Slices/getCoinDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { TbActivityHeartbeat } from "react-icons/tb";

const CoinDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinDetail(id));
  }, [dispatch]);

  const { coinDetail, loading, error } = useSelector(
    (state) => state.getCoinDetails
  );

  console.log(coinDetail);

  return (
    <div className="text-white flex items-center p-2">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <div className="grid md:grid-cols-6 grid-cols-1 w-full">
          {/* Left Side */}
          <div className=" md:col-span-2 col-span-1 flex flex-col justify-center border p-2">
            <div className=" flex gap-4 my-4">
              <button
                className="text-white px-1 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={() => {}}
              >
                USD
              </button>
              <button
                className="text-white px-1 rounded bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={() => {}}
              >
                PKR
              </button>
            </div>
            <div className="">
            <div className="flex justify-between items-center">
                <h1 className="text-tellow-600 font-bold text-[30px] text-yellow-700">
                  {coinDetail.name}
                </h1>
                <h1 className="flex items-center gap-2">
                  <span>
                    <TbActivityHeartbeat className="text-yellow-600 text-[25px]" />
                  </span>
                  <span className="text-[30px] font-bold">
                    #{coinDetail.market_cap_rank}
                  </span>
                </h1>
              </div>
              <img src={coinDetail.image.large} alt="img" width={"150px"} />
            </div>
          </div>
          {/* Right side - graph */}
          <div className=" md:col-span-4 col-span-1 flex justify-center items-center border">
            <h1>Graph</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinDetails;
