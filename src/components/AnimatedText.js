import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
  onHoverStart: {
    scale: 1.2,
    transition: {
      ease: "easeOut",
      duration: 0.3,
      delay: 0,
    },
  },
};

const evenWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const oddWord = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center select-none">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-2xl lg:text-4xl xl:text-6xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) =>
          (index + 1) % 2 == 0 ? (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={evenWord}
              whileHover={quote.onHoverStart}
            >
              {word}&nbsp;
            </motion.span>
          ) : (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={oddWord}
              whileHover={quote.onHoverStart}
            >
              {word}&nbsp;
            </motion.span>
          )
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
