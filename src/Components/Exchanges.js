import React, { useEffect } from "react";
import { getExchanges } from "../Store/Slices/getExchangesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { MyAccordion } from "./Accordion";
import ErrorPage from "./ErrorPage";
import { motion } from "framer-motion";
const Exchanges = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExchanges());
  }, [dispatch]);

  const { exchanges, loading, error } = useSelector(
    (state) => state.getExchangesSlice
  );

  const searchText = useSelector((state) =>
    state.searchTextSlice.searchText.toLowerCase()
  );

  // Filter exchanges based on searchText
  const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(searchText)
  );

  return (
    <div className="bg-black text-white">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <div className="p-2">
          {filteredExchanges.length === 0 ? (
            <div className=" flex justify-center items-center">
              <h1 className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                No Exchanges
              </h1>
            </div>
          ) : (
            filteredExchanges.map(
              (
                {
                  id,
                  trust_score_rank,
                  image,
                  name,
                  url,
                  trade_volume_24h_btc,
                  description,
                },
                i
              ) => (
                <motion.div
                  initial={{ opacity: 0, y: -20 }} // Initial animation styles
                  animate={{ opacity: 1, y: 0 }} // Animation on load
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={id}
                >
                  <MyAccordion
                    rank={trust_score_rank}
                    image={image}
                    name={name}
                    marketCap={trade_volume_24h_btc}
                    visitURL={url}
                    details={description}
                  />
                </motion.div>
              )
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
