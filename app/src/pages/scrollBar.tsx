import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const containerRef = useRef(null);

  // Track scroll progress relative to the whole page
  const { scrollYProgress } = useScroll();

  // Animate the width of the progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative z-[55] bg-gray-900">
      {/* Fixed Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-2 bg-red-500"
        style={{ width: progressWidth }}
      />
    </div>
  );
};

export default ScrollProgress;
