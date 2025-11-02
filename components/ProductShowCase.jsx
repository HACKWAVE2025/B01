"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
// import appScreen from "../assets/images/dash.png";
import dashboardImage from "@/app/assets/images/dashboard.png";
import Image from "next/image";
const ProductShowCase = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-black text-white bg-gradient-to-b from-black via-[#0d3b66] to-[#1f7a8c]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white text-center">
              Access Your Health Dashboard, <br />
              <span className="text-2xl md:text-[4rem] font-bold mt-1 leading-none">
                Track <span className="text-[#1f7a8c]">Appointments</span>, and
                View Prescriptions Easily
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={dashboardImage}
          alt="Dashboard preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default ProductShowCase;
