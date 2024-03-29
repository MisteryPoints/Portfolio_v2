"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DevPointImg from "../public/Devpoint-Profile.png";
import DevPointBack from "../public/Devpoint-Me.png";

const flipAnimation = {
  notFlipped: {
    rotateY: 0,
    transition: {
      duration: 0.7,
    },
  },
  flipped: {
    rotateY: 180,
    transition: {
      duration: 0.7,
    },
  },
  hover: {
    cursor: "pointer",
  },
};

const ImageFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDuration, setIsDuration] = useState(false);

  const changeFlip = (flip) => {
    setIsDuration(!isDuration);
    setTimeout(() => {
      setIsFlipped(flip);
    }, [200]);
  };

  return (
    <motion.div
      className="relative"
      variants={flipAnimation}
      whileHover="hover"
      animate={isDuration ? "flipped" : "notFlipped"}
      onClick={() => changeFlip(!isFlipped)}
    >
      <div className="inset-0 w-full h-full bg-sky-200/50 rounded-lg shadow-sm transform ">
        <Image
          src={DevPointImg}
          alt="Front Image"
          className={`w-full h-full object-cover rounded-lg transition-all duration-300 transform-gpu `}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
        />
        <Image
          src={DevPointBack}
          alt="Back Image"
          className={`w-full h-full object-cover bg-sky-100 dark:bg-gray-400 rounded-lg transition-all duration-300 transform-gpu absolute top-0 left-0 ${
            isFlipped ? "" : "hidden"
          }`}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
        />
      </div>
    </motion.div>
  );
};

export default ImageFlip;
