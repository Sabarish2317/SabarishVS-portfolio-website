import { motion } from "framer-motion";

const ShakingHello = () => {
  return (
    <motion.img
      src="/icons/hey-icon.png"
      alt="down"
      className="h-[78px] absolute top-[-28px] right-[-32px]" // Adjust size as needed
      animate={{
        rotate: [0, 10, -10, 10, -10, 0],
        y: [0, -10, 0], // Move up by 10px, then back
      }}
      transition={{
        duration: 1.9, // Smooth animation duration
        repeat: Infinity, // Loop forever
        ease: "easeInOut", // Smooth easing
      }}
    />
  );
};

export default ShakingHello;
