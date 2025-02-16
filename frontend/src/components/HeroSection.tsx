import React from "react";

const HeroSection: React.FC = () => {
  return (
    // Hero section container
    <div className="hero-section bg-[rgba(255, 255, 255, 0.1)] w-max flex px-6 py-8">
      {/* photo and text container */}
      <div className="hero-main">
        <img src="/icons/sabarish-pic.png" alt="dp" />
      </div>
    </div>
  );
};

export default HeroSection;
