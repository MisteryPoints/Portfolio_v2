import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  CircularText,
  ExternalLinkIcon,
  LinkedinIcon,
  GithubIcon,
  MiscIcon,
  DayIcon,
  NightIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
          asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-28 pt-4 pb-20 h-8 bg-light font-medium flex justify-between">
      <nav className="items-center">
        <CustomLink href="/" title="Home" className="mr-2" />
        <CustomLink href="/about" title="About" className="mx-2" />
        <CustomLink href="/projects" title="Projects" className="mx-2" />
        <CustomLink href="/articles" title="Articles" className="ml-2" />
      </nav>
      <nav className="flex items-start justify-center gap-4 min-h-[50px] absolute right-28 top-4">
        <motion.a
          href="https://wa.me/18097298392"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <WhatsappIcon className="h-[30px] w-[30px]" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/victoorat.bonilla"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon className="h-[30px] w-[30px]" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/victor_tejada98"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <InstagramIcon className="h-[30px] w-[30px]" />
        </motion.a>
        {/* <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon className="h-[30px] w-[30px]" />
        </motion.a> */}
        <motion.a
          href="https://www.linkedin.com/in/devpoint/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedinIcon className="h-[30px] w-[30px]" />
        </motion.a>
        <motion.a
          href="https://github.com/MisteryPoints"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon className="h-[30px] w-[30px] text-center" />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-0 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;