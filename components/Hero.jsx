"use client";

import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import HoverBorderGradient from "./ui/hover-border-gradient";

import messageImage from "@/app/assets/images/message.png";
import cursorImage from "@/app/assets/images/cursor.png";
import Link from "next/link";

const Hero = () => {
  const AceternityLogo = () => (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="mt-15 h-[80vh] p-4 bg-black text-white bg-linear-to-b from-black via-[#0d3b66] to-[#1f7a8c] py-[72px] sm:py-24 relative overflow-clip">
      {/* Gradient Circle */}
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#1f7a8c] bg-[radial-gradient(closest-side,#000_82%,#1f7a8c)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />

      <div className="p-4 relative">
        {/* Version Banner */}
        <div className="flex items-center justify-center">
          {/* <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is Here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <MoveRight />
            </span>
          </a> */}
        </div>

        {/* Main Heading */}
        <div className="flex justify-center">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
              Your Health,
              <br /> Anytime, Anywhere
            </h1>

            <motion.div
              className="h-[270px] w-auto absolute right-[950px] top-[-55px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                alt="Cursor"
                draggable={false}
                className="max-w-none"
                width={200}
                height={200}
              />
            </motion.div>

            <motion.div
              className="h-[270px] w-auto absolute top-[270px] left-[880px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                alt="Message"
                draggable={false}
                className="max-w-none"
                width={234}
                height={234}
              />
            </motion.div>
          </div>
        </div>  

        {/* Description */}
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-xl">
            Connect with verified doctors instantly, get AI-powered symptom
            analysis, digital prescriptions, and order medicines — all in one
            platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-8 gap-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            <AceternityLogo />
            <Link href={"/onboarding"}>
              <span>Get Started</span>
            </Link>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;
