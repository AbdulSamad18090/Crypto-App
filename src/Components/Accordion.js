import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { MdOpenInNew } from "react-icons/md";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function MyAccordion({
  rank,
  image,
  name,
  marketCap,
  visitURL,
  details,
}) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="text-[17px] bg-gray-900 my-1 border-b-0 pr-2 text-white hover:text-white  font-normal"
          onClick={() => handleOpen(1)}
        >
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-2 items-center w-full">
            <div className="flex items-center gap-4 px-2 w-full">
              <h1>{rank}</h1>
              <img src={image} alt="img" className="rounded" />
              <h1>{name}</h1>
            </div>
            <div className="flex sm:justify-center justify-end">
              <h1 className="text-gray-600">{marketCap.toFixed(4)}</h1>
            </div>
            <div className="flex justify-end items-center col-span-2 sm:col-span-1 w-full">
              <a href={visitURL} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center gap-2 w-full py-1 px-4 rounded bg-gradient-to-r from-purple-500 to-pink-500 shadow-gradient">
                  Visit{" "}
                  <span>
                    <MdOpenInNew />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="text-[15px]">
          {details ? details : "No details"}
        </AccordionBody>
      </Accordion>
    </>
  );
}
