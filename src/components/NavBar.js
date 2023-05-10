import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  LinkedinIcon,
  GithubIcon,
  DayIcon,
  NightIcon,
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light lg:bg-light dark:lg:bg-dark ${
          asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light lg:bg-light dark:lg:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full lg:px-12 3xl:px-28  pt-4 pb-20 h-8 font-medium flex justify-between dark:text-light relative">
      <button
        className="flex-col justify-center items-center h-6 hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm  ${
            isOpen ? "-rotate-45 translate-y-[3px]" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-[3px] w-6 rounded-sm ${
            isOpen ? "-rotate-[135deg] -translate-y-[2px]" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="items-center pt-6">
          <CustomLink href="/" title="Home" className="mr-2" />
          <CustomLink href="/about" title="About" className="mx-2" />
          <CustomLink href="/projects" title="Projects" className="mx-2" />
          <CustomLink href="/articles" title="Articles" className="ml-2" />
        </nav>
        <nav className="flex items-start justify-center gap-4 min-h-[50px] pt-5">
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
          <motion.a
            href="https://www.linkedin.com/in/devpoint/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="h-[33px] w-[33px] rounded-lg " />
          </motion.a>
          <motion.a
            href="https://github.com/MisteryPoints"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="h-[33px] w-[33px] text-center" />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode !== "dark" ? (
              <DayIcon className={"fill-dark h-[33px] w-[33px]"} />
            ) : (
              <NightIcon className={"fill-dark h-[33px] w-[33px]"} />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-xl backdrop-blur-md py-32 xs:py-12 lg:inline-block 3xl:hidden"
        >
          <nav className="flex items-center flex-col justify-center text-light dark:text-dark z-50">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap items-start justify-center gap-4 min-h-[50px] pt-5 mx-12">
            <motion.a
              href="https://wa.me/18097298392"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <WhatsappIcon className="h-[30px] w-[30px]" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/victoorat.bonilla"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <FacebookIcon className="h-[30px] w-[30px]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/devpoint/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <LinkedinIcon className="h-[33px] w-[33px] rounded-lg " />
            </motion.a>
            <motion.a
              href="https://github.com/MisteryPoints"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className=""
            >
              <GithubIcon className="h-[33px] w-[33px] text-center text-light dark:text-dark" />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`items-center justify-center rounded-full visible h-[32px] w-[33px] ${
                mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode !== "dark" ? (
                <DayIcon
                  className={"fill-dark h-[33px] w-[33px] dark:fill-light"}
                />
              ) : (
                <NightIcon
                  className={"fill-dark h-[33px] w-[33px] dark:fill-light"}
                />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] -top-1 translate-x-[-50%] xxs:right-0 xxs:translate-x-[0]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
