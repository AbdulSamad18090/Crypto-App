import React, { useEffect } from "react";
import { getExchanges } from "../Store/Slices/getExchangesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { MyAccordion } from "./Accordion";
import ErrorPage from "./ErrorPage";

const Exchanges = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExchanges());
  }, [dispatch]);

  const { exchanges, loading, error } = useSelector(
    (state) => state.getExchangesSlice
  );

  return (
    <div className="bg-black text-white">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorPage error={error} />
      ) : (
        <div className="p-2">
          {exchanges.map(
            ({
              id,
              trust_score_rank,
              image,
              name,
              url,
              trade_volume_24h_btc,
              description,
            }) => (
              <div key={id}>
                <MyAccordion
                  rank={trust_score_rank}
                  image={image}
                  name={name}
                  marketCap={trade_volume_24h_btc}
                  visitURL={url}
                  details={description}
                />
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Exchanges;
