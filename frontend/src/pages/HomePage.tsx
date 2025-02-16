import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import HeroSection from "@/components/HeroSection";

const HomePage: React.FC = () => {
  return (
    <div className="wrapper flex-col items-center justify-center py-6 px-6 gap-10 w-full mx-auto max-w-[1920px]">
      {/* top navigation bar */}
      <TopNavigationBar />
      {/* main content */}
      <HeroSection />
    </div>
  );
};

export default HomePage;
