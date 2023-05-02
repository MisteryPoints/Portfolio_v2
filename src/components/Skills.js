import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Skill = ({ name, x, y, color, href }) => {
  const ref = useRef(null);

  const animation = useAnimation();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [animation, isInView]);

  const variants = {
    visible: {
      x: x,
      y: y,
      transition: { duration: 1 },
    },
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`flex items-center justify-center rounded-full font-semibold ${color} text-light py-3 px-6 shadow-gray-500 shadow-sm hover:cursor-pointer absolute border-2 border-solid border-transparent dark:border-light dark:hover:shadow-gray-500 dark:shadow-none`}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      initial={{ x: 0, y: 0 }}
      variants={variants}
      animate={animation}
      viewport={{ once: true }}
      target={"_blank"}
    >
      {name}
    </motion.a>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-56 mb-10 text-center w-full dark:text-light">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.a
          className="flex items-center justify-center rounded-full font-semibold bg-sky-900 text-light p-8 shadow-gray-500 shadow-sm hover:cursor-pointer border-2 border-solid border-transparent dark:border-light dark:shadow-light"
          whileHover={{ scale: 1.1 }}
          href="https://developer.mozilla.org/es/"
          target={"_blank"}
        >
          Web
        </motion.a>
        <Skill
          name="CSS"
          x="-12vw"
          y="-12vh"
          color="bg-sky-500"
          href="https://devdocs.io/css/"
        />
        <Skill
          name="HTML"
          x="12vw"
          y="-12vh"
          color="bg-orange-500"
          href="https://devdocs.io/html/"
        />
        <Skill
          name="C#"
          x="-22vw"
          y="-2vh"
          color="bg-violet-500"
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
        />
        <Skill
          name="Git"
          x="22vw"
          y="-2vh"
          color="bg-orange-700"
          href="https://git-scm.com/doc/"
        />
        <Skill
          name="Firebase"
          x="-23vw"
          y="-23vh"
          color="bg-yellow-500"
          href="https://firebase.google.com/docs"
        />
        <Skill
          name="Java"
          x="23vw"
          y="-23vh"
          color="bg-sky-600"
          href="https://docs.oracle.com/en/java/"
        />
        <Skill
          name="Java EE"
          x="-35vw"
          y="-18vh"
          color="bg-sky-900"
          href="https://docs.oracle.com/javaee/"
        />
        <Skill
          name="MySQL"
          x="35vw"
          y="-18vh"
          color="bg-gray-700"
          href="https://dev.mysql.com/doc/"
        />
        <Skill
          name="React"
          x="-18vw"
          y="-40vh"
          color="bg-blue-900"
          href="https://react.dev/"
        />
        <Skill
          name="SQL Server"
          x="18vw"
          y="-40vh"
          color="bg-red-500"
          href="https://learn.microsoft.com/en-us/sql/sql-server/"
        />
        <Skill
          name="JavaScript"
          x="0vw"
          y="-46vh"
          color="bg-yellow-400"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill
          name="MongoDB"
          x="-8vw"
          y="-26vh"
          color="bg-lime-400"
          href="https://www.mongodb.com/docs/"
        />
        <Skill
          name="SAS"
          x="8vw"
          y="-26vh"
          color="bg-blue-400"
          href="https://support.sas.com/en/documentation.html"
        />
        <Skill
          name="Next"
          x="-8vw"
          y="26vh"
          color="bg-gray-600"
          href="https://nextjs.org/docs/getting-started"
        />
        <Skill
          name="Node"
          x="8vw"
          y="26vh"
          color="bg-green-500"
          href="https://nodejs.org/en/docs"
        />
        <Skill
          name="Oracle PL/SQL"
          x="-12vw"
          y="12vh"
          color="bg-red-700"
          href="https://docs.oracle.com/database/121/LNPLS/toc.htm"
        />
        <Skill
          name="Prisma"
          x="12vw"
          y="12vh"
          color="bg-sky-800"
          href="https://www.prisma.io/docs/"
        />
        <Skill
          name="Python"
          x="-23vw"
          y="23vh"
          color="bg-yellow-400"
          href="https://docs.python.org/"
        />
        <Skill
          name="Spring Boot"
          x="23vw"
          y="23vh"
          color="bg-green-700"
          href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"
        />
        <Skill
          name="T3"
          x="-35vw"
          y="18vh"
          color="bg-violet-300"
          href="https://create.t3.gg/en/introduction/"
        />
        <Skill
          name="Three.js"
          x="35vw"
          y="18vh"
          color="bg-gray-500"
          href="https://threejs.org/docs/"
        />
        <Skill
          name="tRPC"
          x="-18vw"
          y="40vh"
          color="bg-blue-300"
          href="https://trpc.io/docs/"
        />
        <Skill
          name="VBA"
          x="18vw"
          y="40vh"
          color="bg-green-400"
          href="https://learn.microsoft.com/en-us/office/vba/api/overview/"
        />
        <Skill
          name="TypeScript"
          x="0vw"
          y="46vh"
          color="bg-blue-600"
          href="https://www.typescriptlang.org/docs/"
        />
        <Skill
          name=".Net"
          x="0vw"
          y="-18vh"
          color="bg-purple-500"
          href="https://learn.microsoft.com/en-us/dotnet/"
        />
        <Skill
          name="Express"
          x="0vw"
          y="18vh"
          color="bg-gray-900"
          href="https://expressjs.com/es/"
        />
      </div>
    </>
  );
};

export default Skills;
