import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import WhatsappClone from "../../public/Projects/Whatsapp-Clone.png";
import Krypt from "../../public/Projects/Krypt.png";
import PokeRemix from "../../public/Projects/PokeRemix.png";
import CryptoQuote from "../../public/Projects/CryptoQuote.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
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
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
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
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>DevPoint | Projects </title>
        <meta name="about" content="About Page" />
      </Head>
      <TransitionEffect />
      <main className="w-full pb-24 bg-light flex flex-col items-center justify-center dark:bg-dark">
        <Layout className="pt-16">
          <AnimatedText
            text="Bringing ideas to life through innovation and impact."
            className="lg:!text-5xl sm:!text-4xl xs:!text-3xl "
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-12"
            >
              <FeaturedProject
                type="Feature"
                title="WhatsApp Web Clone"
                summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
                img={WhatsappClone}
                link="https://devpoint-messenger.vercel.app/"
                github="https://github.com/MisteryPoints/WhatsappClone"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-6 sm:col-span-12"
            >
              <Project
                type="Feature"
                title="Pokedex App"
                summary="An application to look at your favorite pokemons, their type, number of pokedex with sprite and 3d images. "
                img={PokeRemix}
                link="https://pokeremix.vercel.app/"
                github="https://github.com/MisteryPoints/PokeRemix"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-6 sm:col-span-12"
            >
              <Project
                type="Feature"
                title="Crypto Screener App"
                summary="An application to validate the prices and changes of your favorite cryptocurrencies."
                img={CryptoQuote}
                link="https://cryptoquote.vercel.app/"
                github="https://github.com/MisteryPoints/CryptoQuote"
              />
            </motion.div>

            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-12"
            >
              <FeaturedProject
                type="Feature"
                title="Krypt Exchange"
                summary="An Exchange type application that allows you to connect your Metamask account to exchange your money for Ethereum, being a Web 3.0 connected to the Ethereum blockchain."
                img={Krypt}
                link="https://krypt-devpoint.vercel.app/"
                github="https://github.com/MisteryPoints/Web3"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-6 sm:col-span-12"
            >
              <Project
                type="Feature"
                title="Crypto Screener App"
                summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
                img={CryptoQuote}
                link="https://cryptoquote.vercel.app/"
                github="https://github.com/MisteryPoints/CryptoQuote"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-6 sm:col-span-12"
            >
              <Project
                type="Feature"
                title="Crypto Screener App"
                summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
                img={CryptoQuote}
                link="https://cryptoquote.vercel.app/"
                github="https://github.com/MisteryPoints/CryptoQuote"
              />
            </motion.div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
