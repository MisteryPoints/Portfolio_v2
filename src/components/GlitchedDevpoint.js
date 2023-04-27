import React, { useEffect, useRef, useState } from "react";
import { Power4, Sine, gsap } from "gsap";
import Link from "next/link";

const GlitchedDevpoint = () => {
  let image_1 = useRef(null);
  let image_2 = useRef(null);
  let image_3 = useRef(null);
  let image_4 = useRef(null);
  let image_5 = useRef(null);
  let image_6 = useRef(null);

  const timeline = gsap.timeline();
  useEffect(() => {
    timeline.from(image_1, {
      opacity: 0,
      duration: 0.5,
      skewX: 10,
      y: -100,
      ease: Power4.easeInOut,
    });
    timeline.from(
      image_2,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      image_3,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: 100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      image_4,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: -100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      image_5,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        y: -100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );

    timeline.from(
      image_6,
      {
        opacity: 0,
        duration: 0.5,
        skewX: 10,
        x: 100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
    timeline.from(
      image_2,
      {
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -100,
      },
      "-=.2"
    );
    timeline.to(
      image_5,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 100,
      },
      "-=.2"
    );
    timeline.to(
      image_3,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -100,
      },
      "-=.2"
    );
    timeline.to(
      image_6,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: 100,
      },
      "-=.2"
    );
    timeline.to(
      image_4,
      {
        duration: 0.5,
        opacity: 0,
        ease: Sine.easeInOut,
        x: -100,
      },
      "-=.2"
    );
    timeline.to(
      image_1,
      {
        opacity: 0,
        duration: 0.5,
        x: 100,
        y: -100,
        ease: Sine.easeInOut,
      },
      "-=.2"
    );
  }, [timeline]);

  return (
    <div className="text-[#000000] underline underline-offset-2 block">
      <div>
        <Link href="https://devpoint.vercel.app" target={"_blank"} className="">
          <div className="flex absolute items-center justify-center ">
            <div
              ref={(el) => (image_1 = el)}
              className="font-semibold text-[#e9e970] text-[1vmax] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>

          <div className="flex absolute items-center justify-center">
            <div className="font-semibold text-[#ffffff] text-[1vmax] md:text-2xl mix-blend-difference leading-none cursor-default">
              DevPoint
            </div>
          </div>
          <div className="flex absolute items-center justify-center">
            <div
              ref={(el) => (image_2 = el)}
              className="font-semibold text-[#01ff01] text-[1.1vmax] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>
          <div className="flex absolute items-center justify-center">
            <div
              ref={(el) => (image_3 = el)}
              className="font-semibold text-[#fc1f1f] text-[1.1vmax] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>
          <div className="flex absolute items-center justify-center">
            <div
              ref={(el) => (image_4 = el)}
              className="font-semibold text-[#8cf7f7] text-[1.1max] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>
          <div className="flex absolute items-center justify-center">
            <div
              ref={(el) => (image_5 = el)}
              className="font-semibold text-[#4254f8] text-[1.1vmax] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>
          <div className="flex absolute items-center justify-center">
            <div
              ref={(el) => (image_6 = el)}
              className="font-semibold text-[#ac00ac] text-[1.1vmax] md:text-2xl mix-blend-difference leading-none cursor-default"
            >
              DevPoint
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GlitchedDevpoint;
