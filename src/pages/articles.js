import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import WhatsappClone from "../../public/Projects/Whatsapp-Clone.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouseEnter = (event) => {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX - 80);
    y.set(10);
  };

  const handleMouseLeave = (event) => {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        width={300}
        height={180}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-3xl shadow-md shadow-dark dark:shadow-light/20"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 last:mb-0 border border-solid border-dark dark:text-light dark:bg-dark dark:border-light border-r-4 border-b-4"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 relative dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-0 -right-4  -z-10 w-[102%] h-[101.5%] rounded-[32px] bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer rounded-lg inline-block overflow-hidden"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-3xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw
          "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 select-none">{summary}</p>
      <span className="text-primary font-semibold select-none dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>DevPoint | About </title>
        <meta name="about" content="About Page" />
      </Head>
      <main className="w-full pb-32 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="The Software is Changing the World"
            className="mb-16"
          />
          <ul className="grid grid-cols-2 gap-16 mb-16">
            <FeaturedArticle
              time="Feature"
              title="WhatsApp Web Clone"
              summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
              img={WhatsappClone}
              link="https://devpoint-messenger.vercel.app/"
            />
            <FeaturedArticle
              time="Feature"
              title="WhatsApp Web Clone"
              summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
              img={WhatsappClone}
              link="https://devpoint-messenger.vercel.app/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center dark:text-light">
            All Articles
          </h2>
          <ul className="py-16">
            <Article
              title={"Theo.gg: TypeScript Just Got SO MUCH BETTER"}
              img={"https://i.ytimg.com/vi/9RM2aErJs-s/maxresdefault.jpg"}
              date={"April 22, 2023"}
              link={
                "https://www.youtube.com/watch?v=9RM2aErJs-s&list=PLT1FcBSCfgsE_oMrpuoP4j6O_36a9I4ag&index=6&ab_channel=Theo-t3%E2%80%A4gg"
              }
            />
            <Article
              title={"Theo.gg: TypeScript Just Got SO MUCH BETTER"}
              img={"https://i.ytimg.com/vi/9RM2aErJs-s/maxresdefault.jpg"}
              date={"April 22, 2023"}
              link={
                "https://www.youtube.com/watch?v=9RM2aErJs-s&list=PLT1FcBSCfgsE_oMrpuoP4j6O_36a9I4ag&index=6&ab_channel=Theo-t3%E2%80%A4gg"
              }
            />
            <Article
              title={"Theo.gg: TypeScript Just Got SO MUCH BETTER"}
              img={"https://i.ytimg.com/vi/9RM2aErJs-s/maxresdefault.jpg"}
              date={"April 22, 2023"}
              link={
                "https://www.youtube.com/watch?v=9RM2aErJs-s&list=PLT1FcBSCfgsE_oMrpuoP4j6O_36a9I4ag&index=6&ab_channel=Theo-t3%E2%80%A4gg"
              }
            />
            <Article
              title={"Theo.gg: TypeScript Just Got SO MUCH BETTER"}
              img={"https://i.ytimg.com/vi/9RM2aErJs-s/maxresdefault.jpg"}
              date={"April 22, 2023"}
              link={
                "https://www.youtube.com/watch?v=9RM2aErJs-s&list=PLT1FcBSCfgsE_oMrpuoP4j6O_36a9I4ag&index=6&ab_channel=Theo-t3%E2%80%A4gg"
              }
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
