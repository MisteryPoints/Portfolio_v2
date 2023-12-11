import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-1 bottom-[-50px] lg:bottom-[0px] flex items-center justify-center overflow-hidden md:-top-36 md:bottom-auto md:right-1 md:left-auto xxs:hidden">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-28">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:misterypoint2@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-white shadow-md border border-solid border-dark w-28 h-28 rounded-full text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light transition-all duration-300 md:w-[5rem] md:h-[5rem] md:text-sm"
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
