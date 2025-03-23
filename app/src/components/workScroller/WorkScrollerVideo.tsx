import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkScrollerVideoProps {
  index: number;
}

const WorkScrollerVideo: React.FC<WorkScrollerVideoProps> = ({ index }) => {
  const selectVideo = (index: number): string => {
    switch (index) {
      case 0:
        return "app.mp4";
      case 1:
        return "desktop compo.mp4";
      default:
        return "design comp.mp4";
    }
  };

  return (
    <div className="right-side flex flex-col w-full min-h-full justify-center align-middle">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <video
            className="w-[100%] h-full min-h-full rounded-2xl object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={selectVideo(index)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WorkScrollerVideo;
