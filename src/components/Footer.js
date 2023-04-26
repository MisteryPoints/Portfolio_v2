import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import GlitchedDevpoint from "./GlitchedDevpoint";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1.5px] border-solid border-dark font-medium text-lg absolute bottom-0">
      <Layout className="py-8 flex items-center justify-between">
        <span className="select-none">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="text-center flex -left-20 relative items-top text-2xl">
          Build With 💌 by&nbsp;
          <GlitchedDevpoint />
        </div>
        <Link
          href="https://devpoint.vercel.app"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
