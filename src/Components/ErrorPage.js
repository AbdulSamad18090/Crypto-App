import { Button } from "@material-tailwind/react";
import React from "react";
import { IoReload } from "react-icons/io5";

const ErrorPage = ({ error }) => {
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center bg-black text-white">
      Error: {error}
      <Button
        className="flex items-center justify-center my-10 bg-gradient-to-r from-purple-500 to-pink-500"
        onClick={() => {
          window.location.reload();
        }}
      >
        <span className=" mx-2 text-[20px]">
          <IoReload />
        </span>
        Reload Page
      </Button>
    </div>
  );
};

export default ErrorPage;
