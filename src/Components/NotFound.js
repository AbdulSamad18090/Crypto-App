// 404.js

import { Button } from "@material-tailwind/react";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center bg-black text-white">
      <h1 className="flex items-center gap-4">
        <span className="font-bold text-[50px] text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          404
        </span>{" "}
        Not Found
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button
        className="flex items-center justify-center my-10 bg-gradient-to-r from-purple-500 to-pink-500"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className=" mx-2 text-[20px]">
          <IoMdArrowRoundBack />
        </span>
        Go to Home Page
      </Button>
    </div>
  );
};

export default NotFound;
