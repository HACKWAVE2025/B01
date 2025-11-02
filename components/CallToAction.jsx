"use client";
import React from "react";
import Image from "next/image";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import helixImage from "../assets/images/helix2.png";
import emojistarImg from "../assets/images/emojistar.png";

function CallToAction() {
  return (
    <div className="bg-black relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <div className="p-4 max-w-xl mx-auto relative">
          {/* Decorative images */}
          <div className="hidden sm:inline">
            <Image
              src={helixImage}
              alt="helix"
              className="absolute top-6 left-[calc(100%+36px)] object-contain"
              width={240}
              height={240}
              priority
            />
            <Image
              src={emojistarImg}
              alt="emojistar"
              className="absolute top-[-120px] right-[calc(100%+24px)] object-contain"
              width={240}
              height={240}
              priority
            />
          </div>

          {/* Heading */}
          <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
            Take Control of Your Health Today
          </h2>

          {/* Paragraph */}
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
            Sign up now to experience seamless, AI-powered healthcare from the
            comfort of your home. Connect with doctors, track your health, and
            order medicines instantly.
          </p>

          {/* Form */}
          <form className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:bg-white/30 transition"
            />
            <button
              type="button"
              className="w-full sm:w-auto bg-white text-black h-12 rounded-lg px-5 font-medium hover:bg-gray-100 transition"
            >
              Get Access
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
