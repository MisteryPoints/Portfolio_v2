import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import WhatsappClone from "../../public/Projects/Whatsapp-Clone.png";
import PokeRemix from "../../public/Projects/PokeRemix.png";
import CryptoQuote from "../../public/Projects/CryptoQuote.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-xl hover:shadow-2xl transition-all duration-200  mt-12">
      <div className="absolute top-0 -right-[16px] -z-10 w-[101%] h-[102%] rounded-[40px] bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-3xl"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between p-12">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-12">
            <GithubIcon className="w-[50px] h-[50px]" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-xl hover:shadow-2xl p-6 relative transition-all duration-200">
      <div className="absolute top-0 -right-4  -z-10 w-[102%] h-[101.5%] rounded-[32px] bg-dark" />
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
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 w-full"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center w-full justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-12">
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
        <title>DevPoint | About </title>
        <meta name="about" content="About Page" />
      </Head>
      <main className="w-full pb-24 bg-light flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Bringing ideas to life through innovation and impact." />
          <div className="grid grid-cols-12 gap-24 ">
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
              className="col-span-6"
            >
              <Project
                type="Feature"
                title="Pokedex App"
                summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
                img={PokeRemix}
                link="https://pokeremix.vercel.app/"
                github="https://github.com/MisteryPoints/PokeRemix"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="col-span-6"
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
              className="col-span-6"
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
              className="col-span-6"
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
