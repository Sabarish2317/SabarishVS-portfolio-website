import { motion } from "framer-motion";

const BouncingArrow = () => {
  return (
    <motion.div
      onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 1.6,
        ease: "easeOut",
      }}
      className="motion div hover:scale-110 cursor-pointer mb-4"
    >
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
    </motion.div>
  );
};

export default BouncingArrow;
