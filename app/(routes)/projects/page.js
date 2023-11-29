import React from "react";
import TransitionEffect from "../../../components/TransitionEffect";
import AnimatedText from "../../../components/AnimatedText";
import Layout from "../../../components/Layout";
import WhatsappClone from "../../../public/Projects/Whatsapp-Clone.png";
import Krypt from "../../../public/Projects/Krypt.png";
import PokeRemix from "../../../public/Projects/PokeRemix.png";
import CryptoQuote from "../../../public/Projects/CryptoQuote.png";
import FeaturedProject from "../../../components/FeaturedProject";
import Project from "../../../components/Project";

const projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full pb-24 bg-light flex flex-col items-center justify-center dark:bg-dark">
        <Layout className="pt-16">
          <AnimatedText
            text="Bringing ideas to life through innovation and impact."
            className="lg:!text-5xl sm:!text-4xl xs:!text-3xl "
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
            <FeaturedProject
              type="Feature"
              title="WhatsApp Web Clone"
              summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
              img={WhatsappClone}
              link="https://devpoint-messenger.vercel.app/"
              github="https://github.com/MisteryPoints/WhatsappClone"
            />
            <Project
              type="Feature"
              title="Pokedex App"
              summary="An application to look at your favorite pokemons, their type, number of pokedex with sprite and 3d images. "
              img={PokeRemix}
              link="https://pokeremix.vercel.app/"
              github="https://github.com/MisteryPoints/PokeRemix"
            />
            <Project
              type="Feature"
              title="Crypto Screener App"
              summary="An application to validate the prices and changes of your favorite cryptocurrencies."
              img={CryptoQuote}
              link="https://cryptoquote.vercel.app/"
              github="https://github.com/MisteryPoints/CryptoQuote"
            />

            <FeaturedProject
              type="Feature"
              title="Krypt Exchange"
              summary="An Exchange type application that allows you to connect your Metamask account to exchange your money for Ethereum, being a Web 3.0 connected to the Ethereum blockchain."
              img={Krypt}
              link="https://krypt-devpoint.vercel.app/"
              github="https://github.com/MisteryPoints/Web3"
            />
            <Project
              type="Feature"
              title="Crypto Screener App"
              summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
              img={CryptoQuote}
              link="https://cryptoquote.vercel.app/"
              github="https://github.com/MisteryPoints/CryptoQuote"
            />
            <Project
              type="Feature"
              title="Crypto Screener App"
              summary="A Gmail Auth Messenger, semi Whatsapp Clone, using React, TailwindCSS, Firebase, Gmail Auth and Styled Components, It allows you to chat with your prefered customers or friends!"
              img={CryptoQuote}
              link="https://cryptoquote.vercel.app/"
              github="https://github.com/MisteryPoints/CryptoQuote"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
