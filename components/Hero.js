"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroDay from "../public/Devpoint-Day-Anime.png";
import HeroNight from "../public/DevPoint-Night-Anime.png";

const FramerImage = motion(Image);

const Hero = () => {
  return (
    <div className="w-1/2 flex justify-center items-end md:w-full lg:w-0">
      <FramerImage
        src={HeroDay}
        alt="DevPoint"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        }}
        className="w-full h-auto lg:hidden md:inline-block 3xl:max-w-[400px] rounded-3xl dark:hidden"
        priority
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
        "
      />
      <FramerImage
        src={HeroNight}
        alt="DevPoint"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        }}
        className="w-full h-auto lg:hidden 3xl:max-w-[350px] max-h- rounded-3xl hidden dark:inline-block dark:lg:hidden"
        priority
        sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
        "
      />
    </div>
  );
};

export default Hero;
