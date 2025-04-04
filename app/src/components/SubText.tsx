import { motion } from "motion/react";
import React from "react";

const SubText: React.FC = () => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: -50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   duration: 0.3,
      //   delay: 1,
      //   ease: "easeOut",
      // }}
      className="py-8 px-4 flex-col justify-center items-start gap-[42px] inline-flex mt-8"
    >
      <div className="text-white text-[clamp(24px,5vw,32px)] font-medium font-['Gabarito'] leading-[33.60px]">
        I thrive on mastering my craft while
        <br />
        exploring a wide range of skills,{" "}
      </div>
      <div>
        <span className="text-white text-[clamp(24px,5vw,32px)] font-medium font-['Gabarito'] leading-[33.60px]">
          Ensuring depth where it matters and versatility where
          <br />
          it counts. I will{" "}
        </span>
        <span className="text-[#ff5733] text-[clamp(24px,5vw,32px)] font-extrabold font-['Gabarito'] leading-[33.60px]">
          Design
        </span>
        <span className="text-white text-[clamp(24px,5vw,32px)] font-medium font-['Gabarito'] leading-[33.60px]">
          ,{" "}
        </span>
        <span className="text-[#ff5733] text-[clamp(24px,5vw,32px)] font-bold font-['Gabarito'] leading-[33.60px]">
          Develop
        </span>
        <span className="text-white text-[clamp(24px,5vw,32px)] font-medium font-['Gabarito'] leading-[33.60px]">
          {" "}
          &
        </span>
        <span className="text-[#ff5733] text-[clamp(24px,5vw,32px)] font-bold font-['Gabarito'] leading-[33.60px]">
          {" "}
          Deliver
        </span>
      </div>
    </motion.div>
  );
};

const SubText2: React.FC = () => {
  return (
    <div className="py-12 px-4 inline-flex flex-col justify-center items-start gap-10 font-['Gabarito'] leading-[33.60px]">
      <div className="justify-center text-white text-[clamp(24px,5vw,32px)] font-regular ">
        I love crafting stunning apps and websites <br />
        Blending creativity with
        <span className="justify-center text-[#ff5733] text-[clamp(24px,5vw,32px)] ml-3 font-semibold  items-start gap-10 font-['Gabarito'] leading-[33.60px]">
          seamless function.
        </span>
      </div>
    </div>
  );
};
const SubText3: React.FC = () => {
  return (
    <div className="py-12 inline-flex flex-col justify-center items-start gap-10 font-['Gabarito'] leading-[33.60px]">
      <div className="justify-center text-white text-[clamp(24px,5vw,32px)] font-regular flex flex-col justify-start items-start ">
        Bringing ideas to life with design and code,
        <div className="justify-center text-[#ff5733] text-[clamp(24px,5vw,32px)] font-bold flex ">
          Here's a glimpse of what I've built.
        </div>
      </div>
    </div>
  );
};

export { SubText, SubText2, SubText3 };
