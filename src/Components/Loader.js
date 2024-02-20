import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <BarLoader color="#a53c90" />
    </div>
  );
};

export default Loader;
