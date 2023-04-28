import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import DevPointImg from "../../public/Devpoint-Profile.png";
import DevPointBack from "../../public/Devpoint-Me.png";

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
      <div className="inset-0 w-full h-full bg-sky-200/75 rounded-lg shadow-sm transform ">
        <Image
          src={DevPointImg}
          alt="Front Image"
          className="w-full h-full object-cover rounded-lg transition-all duration-300 transform-gpu backface-hidden"
        />
        <Image
          src={DevPointBack}
          alt="Back Image"
          className={`w-full h-full object-cover rounded-lg transition-all duration-300 transform-gpu absolute top-0 left-0 ${
            isFlipped ? "" : "hidden"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default ImageFlip;
