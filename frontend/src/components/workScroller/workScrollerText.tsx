import React, { useEffect } from "react";
import items from "../../utils/iconsList";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface WorkScrollerTextProps {
  loadingBarColor: string;
  loadingBarBackgroundColor: string;
  heading: string;
  content: string;
  childrenIndex: number;
  iscondensed: boolean;
  progress: string;
}

const WorkScrollerText: React.FC<WorkScrollerTextProps> = ({
  loadingBarColor,
  loadingBarBackgroundColor,
  heading,
  content,
  childrenIndex,
  iscondensed,
  progress,
}) => {
  const ItemComponent = items[childrenIndex] || items[0];

  // Motion value that reacts to progress changes
  const progressValue = useMotionValue(0);

  // Transform progress from [0, 100] to ["0%", "100%"]
  const height = useTransform(progressValue, [0, 100], ["0%", "150%"]);

  // Update progressValue when progress prop changes
  useEffect(() => {
    progressValue.set(parseInt(progress) || 0);
  }, [progress, progressValue]);

  if (iscondensed) {
    return (
      <div className="text-icons-container pl-4 h-min flex flex-col gap-2 md:gap-4 lg:gap-6  md:flex">
        <div className="text-container">
          <div className="text-[#c2b5cf3a] text-[clamp(22px,3.5vw,36px)] font-bold font-['Gabarito'] ">
            {heading}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="left-side w-full h-min text-loading-container flex flex-row gap-3 md:gap-4 lg:gap-6 py-4">
      {/* Loading bar for animation */}
      <div
        className="loading-bar-animation flex  min-w-[6px] rounded-[8px] "
        style={{ backgroundColor: loadingBarBackgroundColor }}
      >
        <motion.div
          className="loading-bar flex min-w-[6px] max-h-full rounded-[8px]"
          style={{
            backgroundColor: loadingBarColor,
            height, // Motion value applied here
          }}
        >
          <h1 className="text-[#cf105300]">d</h1>
        </motion.div>
      </div>

      {/* Text content */}
      <div className="text-icons-container h-min flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="text-container">
          <div className="text-white text-[clamp(24px,4vw,43px)] font-bold font-['Gabarito'] ">
            {heading}
          </div>
          <div className="self-stretch text-white text-[clamp(16px,3vw,28px)] font-normal font-['Gabarito'] ">
            {content}
          </div>
        </div>
        <ItemComponent />
      </div>
    </div>
  );
};

export default WorkScrollerText;
