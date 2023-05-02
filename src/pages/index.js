import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import HeroDay from "../../public/Devpoint-Day.png";
import HeroNight from "../../public/Devpoint-Night.png";
import Profile from "../../public/Devpoint-DigitalArt.png";
import AnimatedText from "@/components/AnimatedText";
import { ExternalLinkIcon } from "@/components/Icons";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

export default function Home() {
  return (
    <>
      <Head>
        <title>DevPoint | Main</title>
        <meta name="description" content="Generated by Create Next App" />
      </Head>
      <div className="flex items-center text-dark w-full pb-16 dark:text-light">
        <Layout>
          <div className="flex items-center justify-between w-full gap-10">
            <div className="w-1/2 flex justify-center items-end">
              <FramerImage
                src={HeroDay}
                alt="DevPoint"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                }}
                className="w-full h-auto max-w-[450px] max-h-[550px] rounded-3xl dark:hidden"
                priority={true}
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
                className="w-full h-auto max-w-[400px] max-h-[550px] rounded-3xl hidden dark:inline-block"
                priority={true}
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Innovation."
                className="select-none"
              />
              <p className="my-4 text-base font-medium select-none">
                As a skilled Full-Stack Developer, I am dedicated to turning
                Innovative Ideas into Reality Web Applications. Explore my
                latest projects and articles, showcasting my expertise in
                React.JS, React Native and Kotlin Web and Mobile Development.
              </p>
              <div className="grid xl:grid-cols-2 2xl:grid-cols-3 items-center self-start mt-2 gap-2">
                <Link
                  href="/VictorTejadaResume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-200 min-w-[200px] justify-center w-fit dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light"
                  download={true}
                >
                  Resume Eng &nbsp; <ExternalLinkIcon />{" "}
                </Link>
                <Link
                  href="/VictorTejadaCV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-blue-600 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-blue-600 border-2 border-solid border-transparent hover:border-blue-600 transition-all duration-200 justify-center w-fit dark:hover:bg-dark"
                  download={true}
                >
                  CV Esp &nbsp; <ExternalLinkIcon />
                </Link>
                <Link
                  href="mailto:misterypoint2@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="fixed right-0 bottom-12 inline-block w-40 xl:w-42 2xl:w-60">
          <Image
            src={Profile}
            alt={"DevPoint Digital Art"}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
