import BouncingArrow from "@/components/animated components/BouncingArrow";
import HeroSection from "@/components/HeroSection";
import SubText from "@/components/SubText";
import TopNavigationBar from "@/components/TopNavigationBar";
import { CanvasRevealEffectDemo } from "@/components/ui/CanvasRevealDemo";
import { motion } from "motion/react";

import React from "react";

const HomePage: React.FC = () => {
  return (
    //
    // Main section
    //
    <div
      className="main-frame w-full flex-col justify-start items-center inline-flex relative overflow-clip "
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
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      ></div>
      {/*  */}
      {/* main wrapper  */}
      {/*  */}
      <div className="wrapper z-20 flex flex-col  items-center justify-center py-0 px-6 gap-6 w-full  max-w-[1490px]  ">
        <TopNavigationBar />
        <motion.li
          className="hero-section-animation list-none"
          initial={{ scale: 0, opacity: 0 }} // Element is initially squeezed (converged)
          animate={{ scale: 1, opacity: 100 }} // Animates to full width (normal)
          transition={{
            type: "easeinout", // You can change this to "ease" or others for different effects
            stiffness: 300, // Controls the "spring" bounce effect
            damping: 30, // Controls how much the spring slows down
            duration: 1,
          }}
          children={<HeroSection />}
        />

        <BouncingArrow />
        <SubText />
        <CanvasRevealEffectDemo />
      </div>
    </div>
  );
};

export default HomePage;
