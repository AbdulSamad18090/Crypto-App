import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinChartData } from "../Store/Slices/getCoinCartSlice";
import { Line } from "react-chartjs-2";
import { BarLoader } from "react-spinners";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinChart = ({ currency, days }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinChartData({ id: id, days: days, currency: currency }));
  }, [dispatch, id, days, currency]);

  const { coinChartData, loading, error } = useSelector(
    (state) => state.getCoinChartSlice
  );

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <BarLoader color="#a53c90" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!coinChartData) {
    return null;
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time =
      hours > 12 ? `${hours - 12} : ${minutes} PM` : `${hours} : ${minutes} AM`;
    return days === 1 ? time : date.toLocaleString();
  };

  const chartLabels = coinChartData.map((value) => formatTime(value[0]));
  const chartData = coinChartData.map((value) => value[1]);

  const chartOptions = {
    label: `Price in Past Days ${days} in ${currency}`,
    data: chartData,
    borderColor: "orange",
    borderWidth: 2,
  };

  const chartConfig = {
    labels: chartLabels,
    datasets: [chartOptions],
  };

  return (
    <>
      <Line
        data={chartConfig}
        options={{
          elements: {
            point: {
              radius: 1,
            },
          },
        }}
      />
    </>
  );
};

export default CoinChart;
