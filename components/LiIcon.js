"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const LiICon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute xs:left-[6px] md:left-2 lg:-left-9 3xl:left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 md:w-[60%] md:h-[60%] xs:w-[40%] xs:h-[40%]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiICon;
