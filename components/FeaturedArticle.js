"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 relative dark:bg-dark dark:border-light dark:text-light xs:rounded-2xl xs:rounded-br-3xl">
      <div className="absolute -top-[1px] -right-4 -z-10 w-[100.5%] h-[103%] rounded-[35px] rounded-br-[30px] bg-dark dark:bg-light sm:-right-3 sm:-top-[1px] sm:rounded-[30px] sm:rounded-br-[25px]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg inline-block overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline sm:text-base">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 select-none sm:text-sm">{summary}</p>
      <span className="text-primary font-semibold select-none dark:text-primaryDark sm:text-sm">
        {time}
      </span>
    </li>
  );
};

export default FeaturedArticle;
