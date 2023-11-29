"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from "./Icons";

const FramerImage = motion(Image);

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="col-span-6 sm:col-span-12"
    >
      <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-xl hover:shadow-2xl p-6 relative transition-all duration-200 dark:border-light dark:bg-dark dark:text-light">
        <div className="absolute top-0 -right-4  -z-10 w-[102%] h-[101.5%] rounded-[32px] bg-dark dark:bg-light xs:h-[102%] xs:-right-2 xs:-top-[1px] xs:rounded-[25px]" />
        <Link href={link} target="_blank" className="w-full cursor-pointer">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2 w-full"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl ">
              {title}
            </h2>
          </Link>
          <div className="mt-2 flex items-center w-full justify-between md:justify-start">
            <Link
              href={link}
              target="_blank"
              className="rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light md:text-base"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-12 md:w-6">
              <GithubIcon className="w-[50px] h-[50px]" />
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default Project;
