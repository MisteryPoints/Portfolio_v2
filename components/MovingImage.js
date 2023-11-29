"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <h2 className="capitalize text-xl font-semibold hover:underline  sm:text-base">
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
        className="z-10 w-96 h-auto hidden absolute rounded-3xl shadow-md shadow-dark/65 dark:shadow-light/20 sm:!hidden"
      />
    </Link>
  );
};

export default MovingImage;
