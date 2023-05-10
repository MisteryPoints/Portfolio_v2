import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiICon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiICon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-32 lg:mb-[300px] 3xl:mb-[350px]">
      <h2 className="font-bold text-8xl w-full mb-32 text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute lg:left-0 3xl:left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark shadow-md shadow-primary dark:shadow-primaryDark  md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Bachelor of Science in Software Engineering"}
            time={"2018-Present"}
            place={"Universidad del Caribe (Unicaribe)"}
            info={
              "Relevant courses included, Computer Science, Data Structures and Algorithms, Computer Systems Engineering, Artificial Intelligence and Design Patterns."
            }
          />
          <Details
            type={"Mobile & Web Development"}
            time={"2016-2023"}
            place={"Self-Taught, Microsoft / Meta / Udemy Courses"}
            info={
              "Relevant courses included, Web Development SSR, Master in React, Next.js, Redux, Remix Run, MERN Stack and Expo / React Native Stack. Master in Python, Tkinter, Numpy, Pandas, Matplotlib, Pipenv, Django, FastAPI, Bs4. Master of Oracle PL/SQL. Master in Web Development with Three.js, TypeScript, Prisma, tRPC, T3 stack. Master in Java, POO, JDBC, Servlets, JavaEE, Web Services, JSF, EJB, JPA, PrimeFaces, Hibernate, Spring, Struts, XML/SOAP API Rest. Master in Android Development with Kotlin, Android Studio and Jetpack Compose."
            }
          />
          <Details
            type={
              "Technologist of Microcomputing, Computer Science and Digital Electronic"
            }
            time={"2012-2016"}
            place={"Instituto Politécnico Loyola (IPL)"}
            info={
              "Relevant courses included, Computer Science, Digital Electronics, Machine level code (ASM), Microcomputing, Data Analyst, Digital Logic, Embedded Systems, and Embedded Coding."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
