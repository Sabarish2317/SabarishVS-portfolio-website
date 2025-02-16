import React from "react";
import { Button } from "./ui/moving-border";

const TopNavigationBar: React.FC = () => {
  return (
    <div className="top-navigation-bar w-full items-center flex justify-between ">
      {/* Download CV button */}
      {/* <button className="download-button bg-primary px-6 py-3.5 rounded-[21px] flex items-center h-[min-content]">
        <h3 className="text-[#092e33] text-1.8xl font-medium">Download CV</h3>
      </button> */}
      <Button
        borderClassName="bg-slate-800 dark:bg-slate-800"
        duration={3000}
        borderRadius="1.3rem"
        className="bg-[#2d2e309c] dark:bg-[#2d2e309c] px-2 py-2  text-white backdrop-blur-3xl dark:text-white border-[#2d2e309c]
        dark:border-[#2d2e309c] transition-all duration-300 ease-in-out hover:bg-[#3ecf8ead] hover:h6-text-black active:scale-95 active:bg-[#3ECF8E]"
      >
        <h3 className="text-white text-1.8xl font-medium h-[min-content]">
          Download CV
        </h3>
      </Button>
      {/* Social links row */}
      <div className="social-link-row flex gap-[21px]">
        <button className="social-button px-2.5 py-2.5 bg-[#2c2d30] rounded-[21px]">
          <img className="w-10 h-10" src="/icons/linkedin.png" alt="github" />
        </button>
        <button className="social-button px-2.5 py-2.5 bg-[#2c2d30] rounded-[21px]">
          <img className="w-10 h-10" src="/icons/mail.png" alt="github" />
        </button>
        <button className="social-button px-2.5 py-2.5 bg-[#2c2d30] rounded-[21px]">
          <img className="w-10 h-10" src="/icons/wp.png" alt="github" />
        </button>
        <button className="social-button px-2.5 py-2.5 bg-[#2c2d30] rounded-[21px]">
          <img className="w-10 h-10" src="/icons/github.png" alt="github" />
        </button>
      </div>
    </div>
  );
};

export default TopNavigationBar;
