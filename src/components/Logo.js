import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DevIcon from "../../public/DevIcon.png";

const MotionLink = motion(Link);
const FramerImage = motion(Image);

const Logo = () => {
  return (
    <Link href="/">
      <FramerImage
        src={DevIcon}
        alt="DevPoint"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        }}
        whileHover={{
          scale: [1, 0.9, 1.1, 0.9, 1],
          rotate: [0, -5, 0, 5, 0],
          transition: {
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          },
        }}
        className="max-w-[100px] rounded-3xl "
        priority={true}
      />
    </Link>
  );
};

export default Logo;
