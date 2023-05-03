import React, { useState } from "react";
import Layout from "./Layout";
import GlitchedDevpoint from "./GlitchedDevpoint";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-light border-t-[1.5px] border-solid border-dark font-medium text-lg fixed bottom-0 py-2 flex items-center justify-between px-28 dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:px-12 xs:hidden">
      <span className="select-none">
        {new Date().getFullYear()} &copy; All Rights Reserved.
      </span>
      <div className="text-center flex -left-20 relative items-top text-2xl select-none lg:hidden">
        Build With{" "}
        <motion.p
          whileHover={{ y: [-5, -10, -5, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          className="z-[100]"
        >
          💌
        </motion.p>{" "}
        by&nbsp;
        <GlitchedDevpoint />
      </div>
      <div className="group">
        <motion.a
          href="https://devpoint.vercel.app"
          className="underline underline-offset-2 group "
          target={"_blank"}
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
        >
          Say Hello
        </motion.a>
        <motion.p
          className="group inline fixed invisible group-hover:visible select-none"
          animate={{
            scale: 1,
            rotate: [-15, -22.5, -30, -22.5, 0, 22.5, 30, 22.5, 15, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        >
          🖐🏼
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
