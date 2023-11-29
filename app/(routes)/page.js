import Link from "next/link";
import Image from "next/image";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import AnimatedText from "../../components/AnimatedText";
import HireMe from "../../components/HireMe";
import { ExternalLinkIcon } from "../../components/Icons";
import TransitionEffect from "../../components/TransitionEffect";
import Profile from "../../public/Devpoint-DigitalArt.png";

export const metadata = {
  title: "DevPoint | Main",
  description: "Welcome to my Personal Portfolio!",
  icons: "/DevIcon.png",
};

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="flex items-center text-dark w-full pb-16 dark:text-light xs:-pb-12">
        <Layout className="sm:px-12 sm:pt-0 md:pt-16">
          <div className="flex items-center justify-between w-full gap-10 md:flex-col">
            <Hero />
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:mb-12">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Innovation."
                className="select-none lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl 3xl:!text-6xl 3xl:!text-left xl:!text-5xl"
              />
              <p className="my-4 text-base font-medium select-none md:text-sm">
                As a skilled Full-Stack Developer, I am dedicated to turning
                Innovative Ideas into Reality Web Applications. Explore my
                latest projects and articles, showcasting my expertise in
                React.JS, React Native and Kotlin Web and Mobile Development.
              </p>
              <div className="grid sm:grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 items-center self-start mt-2 gap-5">
                <Link
                  href="/VictorTejadaResume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-200 min-w-[200px] justify-center w-fit dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light sm:px-3 sm:min-w-[100px]"
                  download={true}
                >
                  Resume Eng &nbsp; <ExternalLinkIcon className="sm:hidden" />{" "}
                </Link>
                <Link
                  href="/VictorTejadaCV.pdf"
                  target={"_blank"}
                  className="flex items-center text-center bg-blue-600 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-blue-600 border-2 border-solid border-transparent hover:border-blue-600 transition-all duration-200 justify-center w-fit dark:hover:bg-dark sm:ml-0 sm:px-3 3xl:ml-4"
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
        <div className="fixed right-0 bottom-[44px] inline-block 3xl:max-w-[250px] 2xl:max-w-[200px] xl:max-w-[150px] lg:max-w-[125px] lg:bottom-24 md:hidden">
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
