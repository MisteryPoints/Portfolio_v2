import React from "react";
import AnimatedText from "../../../components/AnimatedText";
import Layout from "../../../components/Layout";
import Article from "../../../components/Article";
import FeaturedArticle from "../../../components/FeaturedArticle";
import TransitionEffect from "../../../components/TransitionEffect";
import WhatsappClone from "../../../public/Projects/Whatsapp-Clone.png";

export const metadata = {
  title: "DevPoint | Articles",
  description: "Welcome to my Personal Portfolio!",
  icons: "/DevIcon.png",
};

const articles = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full pb-32 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="The Software is Changing the World"
            className="lg:!text-5xl sm:!text-4xl xs:!text-3xl mb-16"
          />
          <ul className="grid grid-cols-2 gap-16 mb-16 md:grid-cols-1">
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
