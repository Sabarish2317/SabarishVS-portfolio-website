import React from "react";
import ShakingHello from "./animated components/ShakingHello";
import { motion } from "motion/react";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      {/* Section container with extra margin */}
      <div className="section-container-with-margin mt-2  mb-4 flex-col justify-center items-center gap-6 sm:gap-8 inline-flex px-4 sm:px-8">
        {/* Image container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="image-container relative pointer-events-none transform transition-all duration-300 scale-80 sm:scale-80 md:scale-90 lg:scale-100"
        >
          <img
            className="h-[200px] sm:h-[247px] pointer-events-none"
            src="/icons/hero-image.png"
            alt="hero"
          />

          <ShakingHello />
        </motion.div>

        {/* Text and button section */}
        <div className="text-button-section gap-4  sm:gap-4 flex flex-col justify-center items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.2,
              ease: "easeOut",
            }}
            className="text-section flex-col justify-start items-center inline-flex w-full"
          >
            <div className="text-white text-[clamp(48px,10vw,82px)] font-medium font-clash leading-[clamp(40px,8vw,81px)]">
              Sabarish V S
            </div>
            <div className="text-center text-[#d1a9f3]/90 text-[clamp(16px,4vw,32px)] py-1 font-medium font-['Clash Display Variable'] leading-[clamp(24px,4vw,34px)] w-auto">
              A full stack App & Web developer <br /> based in Tamil Nadu,
              India.
            </div>
          </motion.div>

          {/* Button section */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1.4,
              ease: "easeOut",
            }}
            className="button-section justify-center items-center gap-2 sm:gap-4 flex flex-col sm:flex-row  w-full sm:w-auto md:w-full  lg:w-full"
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/sabarish-vs-resume.pdf"; // Update the file path
                link.download = "Sabarish-vs-resume.pdf"; // File name when downloaded
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full sm:w-auto px-6 py-4 bg-[#6a1da0] rounded-lg shadow-[0px_0px_6.7px_0px_rgba(83,12,129,1.00)] border-2 border-[#3a0261] justify-center items-center gap-2.5  inline-flex md:w-full lg:w-full
               transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d"
            >
              <h3 className="text-white text-[clamp(14px,5vw,24px)] font-medium font-['Gabarito'] leading-[clamp(18px,3vw,28px)]">
                Download CV
              </h3>
            </button>
            <button
              onClick={() => {
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 py-4 bg-[#1a0037] rounded-lg shadow-[0px_0px_6.7px_0px_rgba(83,12,129,1.00)] border border-[#741ccb] justify-center items-center gap-2.5  inline-flex md:w-full lg:w-full
             transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d"
            >
              <h3 className="text-white text-[clamp(14px,5vw,24px)] font-medium font-['Gabarito'] leading-[clamp(18px,3vw,28px)]">
                Learn more
              </h3>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
