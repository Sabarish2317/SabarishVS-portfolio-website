import BouncingArrow from "@/components/animated components/BouncingArrow";
import BentoBox from "@/components/bentoBox";
import Carousel from "@/components/carousel";
import Footer from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import { SubText, SubText2, SubText3 } from "@/components/SubText";
import TandC from "@/components/TandC";
import TopNavigationBar from "@/components/TopNavigationBar";
import { CanvasRevealEffectDemo } from "@/components/ui/CanvasRevealDemo";
import WorksScroller from "@/components/workScroller/WorksScroller";
import { motion } from "motion/react";

import React from "react";

const HomePage: React.FC = () => {
  return (
    //
    // Main section
    //
    <div
      className="main-frame w-full flex-col justify-start items-center flex relative overflow-clip "
      style={{
        background:
          "linear-gradient(to bottom, #1b0033 0px, #1b0033 100px , #4c1289 50%)",
      }}
    >
      {/*  */}
      {/* ellipse overlay */}
      {/*  */}
      <div className="absolute left-1/2 w-[1290.89px] top-[-25%] h-[950.85px] opacity-30 bg-[#000000] rounded-full blur-[80px] transform -translate-x-1/2 -translate-y-1/2" />
      {/*  */}
      {/* Noise Overlay with Multiply Blend Mode */}
      {/*  */}
      <div
        className="absolute z-10 inset-0 pointer-events-none opacity-50 mix-blend-multiply"
        style={{
          backgroundImage: "url('/icons/noise-overlay.png')",
          backgroundSize: "fit",
          backgroundRepeat: "repeat",
        }}
      ></div>
      {/*  */}
      {/* main wrapper  */}
      {/*  */}
      <div className="wrapper z-20 flex flex-col  relative items-center justify-center py-0 px-6 gap-6 w-full  max-w-[1490px]">
        <TopNavigationBar />
        <motion.li
          className="hero-section-animation list-none"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{
            type: "easeinout",
            stiffness: 300,
            damping: 30,
            duration: 1,
          }}
          children={<HeroSection />}
        />
        <BouncingArrow />
        <SubText />
        <CanvasRevealEffectDemo />
        <SubText2 />
        <WorksScroller />
        <SubText3 />
        <BentoBox />
        <div className="carousels-container relative h-[300px] w-screen flex justify-start items-center">
          {/* First Carousel - Rotated Right */}
          <Carousel
            className="bg-[#F42584] rotate-45 absolute top-[-40%] -left-1/4"
            start="0%"
            end="-100%"
            transform="rotate(8deg)"
          />

          {/* Second Carousel - Rotated Left */}
          <Carousel
            className="bg-[#564BBD] -rotate-12 absolute top-[-40%] left-1/4"
            start="-100%"
            end="0%"
            transform="rotate(-8deg)"
          />
        </div>
        <Footer />
        <div className="divider self-stretch h-0 rounded-lg outline outline-1  outline-white/30  my-4"></div>
        <TandC />
      </div>
    </div>
  );
};

export default HomePage;
