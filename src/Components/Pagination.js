import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function DefaultPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleItemClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-4 my-10 w-full">
      <Button
        variant="text"
        className="flex items-center gap-2 text-white"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages).keys()].map((page) => (
          <IconButton
            key={page + 1}
            variant={currentPage === page + 1 ? "filled" : "text"}
            color="white"
            onClick={() => handleItemClick(page + 1)}
          >
            {page + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-white"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
