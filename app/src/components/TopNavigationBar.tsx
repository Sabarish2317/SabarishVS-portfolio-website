import { motion } from "framer-motion";
import React from "react";

const TopNavigationBar: React.FC = () => {
  const handleClick = (number: number) => {
    const links: string[] = [
      "https://www.linkedin.com/in/sabarish--vs/",
      "mailto:sabarish_7@protonmail.com",
      "https://wa.me/+919344461476",
      "https://github.com/Sabarish2317",
      "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-5",
    ];
    window.open(links[number], "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.8,
        ease: "easeOut",
      }}
      className="top-navigation-bar w-full items-center flex flex-row justify-between sticky top-4 z-50  "
    >
      {/* Left Logo */}
      <div
        className="logo h-[44px] sm:h-[54px] px-[21px] py-3.5 backdrop-blur-[35.70px] bg-white/5 rounded-[14px] border-2 border-[#7C5EEA]/50 flex justify-center items-center gap-2.5 cursor-pointer hover:scale-105 active:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => window.location.reload()}
      >
        <div className="text-white font-normal font-['Gabarito'] leading-relaxed text-[clamp(12px,4vw,24px)]">
          Portfolio
        </div>
        <img
          className="pointer-events-none transform transition-all duration-300 ease-in-out w-6 h-6 sm:w-8 sm:h-8"
          src="/icons/logo.svg"
          alt="logo"
        />
      </div>

      {/* Right Socials */}
      <div className="flex gap-1.5 items-center justify-end  scale-90 md:scale-100 origin-right transition-all duration-300">
        {[
          "/icons/figma.png",
          "/icons/linkedin.png",
          "/icons/mail.png",
          "/icons/wp.png",
          "/icons/github.png",
        ].map((icon, index) => (
          <button
            key={index}
            onClick={() => handleClick(index === 0 ? 4 : index - 1)}
            className="social-button min-w-max border-2 bg-white/5 border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 active:bg-white/[0.3]"
          >
            <img
              className="w-8 h-8 sm:w-10 sm:h-10 pointer-events-none"
              src={icon}
              alt={`social-${index}`}
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default TopNavigationBar;
