import { motion } from "framer-motion";
import React from "react";

const TopNavigationBar: React.FC = () => {
  // Function to handle link clicks
  const handleClick = (number: number) => {
    const links: string[] = [
      "https://www.linkedin.com/in/sabarish--vs/",
      "mailto:sabarish_7@protonmail.com",
      "https://wa.me/+919344461476",
      "https://github.com/Sabarish2317",
      "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-5&t=Z39FzLgBIxOe31eW-1",
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
      className="top-navigation-bar w-full items-center flex justify-between sticky top-4 z-50"
    >
      <div
        className="logo h-[44px] sm:h-[54px] px-[18px] scale-3d cursor-pointer py-3.5 backdrop-blur-[35.70px] bg-white/5 rounded-[14px] border-2  border-[#9c07ff]/50 justify-center items-center gap-2.5 inline-flex
        hover:scale-105 active:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => window.location.reload()}
      >
        <div className="text-white text-2xl text-[clamp(8px,4vw,24px)]  font-normal font-['Gabarito'] leading-relaxed">
          Portfolio
        </div>
        <img
          className="pointer-events-none transform transition-all duration-300 ease-in-out scale-75 sm:scale-100 "
          src="/icons/logo.svg"
          alt="logo"
        />
      </div>

      {/* Social links row */}
      <div className="social-link-row  gap-[21px] hidden md:flex">
        {/* figma */}
        <button
          onClick={() => handleClick(4)}
          className="social-button border-2 bg-white/5  border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5  rounded-[21px]
        transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d  active:bg-white/[0.3]"
        >
          <img
            className="w-10 h-10 pointer-events-none"
            src="/icons/figma.png"
            alt="github transition-all duration-300 ease-in-out active:bg-white/[0.2]"
          />
        </button>
        {/* linkedin */}
        <button
          onClick={() => handleClick(0)}
          className="social-button border-2 bg-white/5  border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5  rounded-[21px]
        transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d  active:bg-white/[0.3]"
        >
          <img
            className="w-10 h-10 pointer-events-none"
            src="/icons/linkedin.png"
            alt="github transition-all duration-300 ease-in-out active:bg-white/[0.2]"
          />
        </button>
        {/* proton mail */}
        <button
          onClick={() => handleClick(1)}
          className="social-button border-2 bg-white/5 border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d"
        >
          <img
            className="w-10 h-10 pointer-events-none"
            src="/icons/mail.png"
            alt="proton mail"
          />
        </button>
        {/* whatsapp */}
        <button
          onClick={() => handleClick(2)}
          className="social-button border-2 bg-white/5 border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d"
        >
          <img
            className="w-10 h-10 pointer-events-none"
            src="/icons/wp.png"
            alt="whatsapp"
          />
        </button>
        {/* github */}
        <button
          onClick={() => handleClick(3)}
          className="social-button  border-2 bg-white/5 border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d"
        >
          <img
            className="w-10 h-10 pointer-events-none"
            src="/icons/github.png"
            alt="github"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default TopNavigationBar;
