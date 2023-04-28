import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";  
import ImageFlip from "@/components/ImageFlip";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3500 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if(isInView){
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>DevPoint | About </title>
        <meta name="about" content="About Page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pb-20">
          <AnimatedText
            text="Sky is not yet the limit!"
            className="mb-12 select-none"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start select-none  ">
              <h2 className="mb-4 text-lg font-bold text-dark/75">Biography</h2>
              <p className="font-medium">
                Hi, I am DevPoint a Freelancer and a Full-Stack Developer based
                in Santo Domingo, with a passion for building digital services,
                solutions or something that I wish to have.
              </p>
              <p className="font-medium my-4">
                I have a pasion for making imposible and hard to develop ideas
                into Reality!, I loves things like launching products, from
                planning and designing all the way to solving real-life problems
                with code.
              </p>
              <p className="font-medium">
                When not online, I love to hanging out with my wife, family and
                my friends making memorable moments together.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 max-w-[500px]">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark opacity-[95%]" />
              <ImageFlip />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between select-none">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"> <AnimatedNumbers value={40} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"> <AnimatedNumbers value={25} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold"> <AnimatedNumbers value={7} />+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default about;
