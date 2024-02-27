import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetail } from "../Store/Slices/getCoinDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";

const CoinDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinDetail(id));
  }, [dispatch, id]);

  const { coinDetail, loading, error } = useSelector(
    (state) => state.getCoinDetails
  );

  console.log(coinDetail);

  const [currency, setCurrency] = useState("usd");

  if (loading) {
    return <Loader />;
  }

  if (error || !coinDetail) {
    return <ErrorPage error={error} />;
  }

  const renderImage = coinDetail.image && coinDetail.image.large;

  return (
    <>
      <div className="text-white flex items-center">
        <div className="grid md:grid-cols-6 grid-cols-1 w-full">
          {/* LeftSide */}
          <motion.div className="md:col-span-2 col-span-1 flex flex-col justify-center border p-2">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 11 }}
              className="flex gap-4 my-4"
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
            <motion.div>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="flex justify-between items-center"
              >
                <h1 className=" font-bold text-[30px] text-yellow-700">
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
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    type: "spring",
                    damping: 11,
                  },
                }}
              >
                {renderImage && (
                  <img src={renderImage} alt="img" width={"150px"} />
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  type: "spring",
                  damping: 11,
                },
              }}
              className="flex justify-between items-center my-2"
            >
              {coinDetail.market_data &&
                coinDetail.market_data.current_price && (
                  <h1 className="text-[25px]">
                    <span className="text-yellow-700">
                      {currency.toUpperCase()}{" "}
                    </span>
                    {coinDetail.market_data.current_price[currency]}
                  </h1>
                )}

              {coinDetail.market_data &&
                coinDetail.market_data.price_change_percentage_24h && (
                  <h1
                    className={`text-[25px] ${
                      coinDetail.market_data.price_change_percentage_24h > 0
                        ? "text-green-400"
                        : "text-red-400"
                    } flex items-center`}
                  >
                    <span>
                      {coinDetail.market_data.price_change_percentage_24h >
                      0 ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )}
                    </span>
                    {coinDetail.market_data.price_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </h1>
                )}
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.1,
                  type: "spring",
                  damping: 11,
                },
              }}
            >
              <span className="text-[20px] text-yellow-700">Market cap: </span>
              <span>{currency.toUpperCase()} </span>
              {coinDetail.market_data?.market_cap[currency]}
            </motion.div>
          </motion.div>
          {/* Graph */}
          <div className="md:col-span-4 col-span-1 flex justify-center items-center border">
            <h1>Graph</h1>
          </div>
        </div>
      </div>
      <motion.div
        // initial={{ y: 200 }}
        // animate={{
        //   y: 0,
        //   transition: {
        //     duration: 1,
        //     type: "spring",
        //     damping: 11,
        //     delayChildren: 0.5, // Delay children animation
        //   },
        // }}
        className="my-2 text-white p-2"
      >
        <motion.h1
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 11,
            duration: 0.5,
            delay: 0.1,
          }}
          className="text-[20px] text-yellow-700"
        >
          Description:
        </motion.h1>
        <motion.p
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 11,
            duration: 0.5,
            delay: 0.2,
          }}
          dangerouslySetInnerHTML={{ __html: coinDetail.description?.en }}
          className="text-sm text-gray-700 text-justify"
        />
      </motion.div>
    </>
  );
};

export default CoinDetails;
