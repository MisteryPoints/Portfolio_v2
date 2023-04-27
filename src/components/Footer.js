import React, { useState } from "react";
import Layout from "./Layout";
import GlitchedDevpoint from "./GlitchedDevpoint";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full border-t-[1.5px] border-solid border-dark font-medium text-lg fixed bottom-0">
      <Layout className="py-2 flex items-center justify-between">
        <span className="select-none">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="text-center flex -left-20 relative items-top text-2xl">
          Build With 💌 by&nbsp;
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
              repeatDelay: 1
            }}
          >
            Say Hello
          </motion.a> 
          <motion.p className='group inline fixed invisible group-hover:visible select-none'
          initial={{}}
          animate={{  
              scale: 1,
              rotate: [0, -90, 90, 0] 
          }}
          transition={{
            duration: 2, 
            repeat: Infinity,
            repeatDelay: 1
          }}>🖐🏼</motion.p> 
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
