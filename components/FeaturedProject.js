"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="col-span-12"
    >
      <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-xl hover:shadow-2xl transition-all duration-200  mt-12 dark:border-light dark:bg-dark dark:text-light lg:flex-col xs:rounded-2xl xs:rounded-br-3xl">
        <div className="absolute top-0 -right-[16px] -z-10 w-[101%] h-[102%] rounded-[40px] rounded-br-[30px] bg-dark dark:bg-light xs:-right-2 xs:-top-[1px] xs:rounded-[25px] xs:rounded-br-[25px]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-3xl lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            width={800}
            height={480}
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between p-12 lg:w-full lg:px-8 lg:pt-6">
          <span className="text-primary font-medium text-xl dark: dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-base">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-12">
              <GithubIcon className="w-[50px] h-[50px]" />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default FeaturedProject;
