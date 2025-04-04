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
  const height = useTransform(progressValue, [0, 100], ["0%", "100%"]);

  // Update progressValue when progress prop changes
  useEffect(() => {
    progressValue.set(parseInt(progress) || 0);
  }, [progress, progressValue]);

  // Motion Variants for Enter & Exit Animations
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts faded & shifted down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    }, // Animates in
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }, // Animates out
  };

  const barVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { scaleY: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  if (iscondensed) {
    return (
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-icons-container h-min flex flex-col gap-2 md:gap-4 lg:gap-6"
      >
        <div className="text-container">
          <div className="text-[#c2b5cf3a] text-[clamp(24px,5vw,32px)] font-semibold font-['Gabarito']">
            {heading}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="left-side w-full h-min text-loading-container flex flex-row gap-3 md:gap-4 lg:gap-6 py-4"
    >
      {/* Loading bar for animation */}
      <div className="text-icons-container h-min flex flex-col gap-2 md:gap-4 lg:gap-6">
        <div className="text-and-loading-container flex flex-row gap-4">
          {/* Animated Loading Bar */}
          <motion.div
            className="loading-bar-animation flex min-w-[6px] rounded-[8px] mt-4 origin-bottom"
            style={{ backgroundColor: loadingBarBackgroundColor }}
            variants={barVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="loading-bar flex min-w-[6px] max-h-full rounded-[8px]"
              style={{
                backgroundColor: loadingBarColor,
                height,
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-container">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-white text-[clamp(28px,6vw,38px)] font-bold font-['Gabarito']"
            >
              {heading}
            </motion.div>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="self-stretch text-white text-[clamp(18px,4.5vw,28px)] font-normal font-['Gabarito']"
            >
              {content}
            </motion.div>
          </div>
        </div>

        {/* Icon Component */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ItemComponent />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WorkScrollerText;
