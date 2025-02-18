import { motion } from "framer-motion";

const BouncingArrow = () => {
  return (
    <motion.img
      src="/icons/down-arrow.svg"
      alt="down"
      className="w-11 h-11" // Adjust size as needed
      animate={{
        y: [0, -10, 0], // Move up by 10px, then back
      }}
      transition={{
        duration: 1.2, // Smooth animation duration
        repeat: Infinity, // Loop forever
        ease: "easeInOut", // Smooth easing
      }}
    />
  );
};

export default BouncingArrow;
