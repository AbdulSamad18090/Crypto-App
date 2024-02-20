import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination() {
  const [active, setActive] = useState(1);

  const handleItemClick = (index) => {
    setActive(index);
  };

  const handleNext = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const handlePrev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 my-10 w-full">
      <Button
        variant="text"
        className="flex items-center gap-2 text-white"
        onClick={handlePrev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <IconButton
            key={item}
            variant={active === item ? "filled" : "text"}
            // className="text-white bg-gradient-to-r from-purple-500 to-pink-500"
            color="white"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-white"
        onClick={handleNext}
        disabled={active === 5}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}