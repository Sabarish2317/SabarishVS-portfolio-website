import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SubText from "@/components/SubText";

const FullHeightSection = () => {
  const sectionRef = useRef(null);

  // Track scroll within the 300vh section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Tracks from top to bottom
  });

  // Transform to keep the circle centered within the section
  const circleY = useTransform(
    scrollYProgress,
    [0, 1],
    ["50vh", "calc(300vh - 50%)"]
  );

  return (
    <div className="main-container flex flex-col">
      <SubText />
      <SubText />
      <SubText />
      <SubText />
      <SubText />

      {/* 300vh Section */}
      <div
        ref={sectionRef}
        className="relative h-[300vh] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 overflow-hidden"
      >
        {/* Circle stays within the section using transform */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: circleY }}
        >
          <div className="w-24 h-24 bg-white rounded-full shadow-lg"></div>
        </motion.div>
      </div>

      <SubText />
      <SubText />
      <SubText />
      <SubText />
    </div>
  );
};

export default FullHeightSection;
