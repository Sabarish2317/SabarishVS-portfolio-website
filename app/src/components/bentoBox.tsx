import React, { useState } from "react";

const BentoBox: React.FC = () => {
  return (
    <div className="bento-Container p-3 rounded-2xl flex flex-col justify-start items-start gap-3 overflow-hidden ">
      {/*  row 1*/}
      <div className="item-1 flex self-stretch relative md:bg-purple-950  md:rounded-xl shadow-[0px_4px_26.700000762939453px_8px_rgba(0,0,0,0.25)] overflow-hidden flex-col md:flex-row gap-4">
        {/* 1st element */}
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] leading-relaxed">
              Buy My Tix is a web platform for buying and reselling tickets for
              movies, concerts, and sports events. Built with modern web
              technologies, it ensures a seamless and secure user experience for
              ticket transactions.
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/BuyMyTix"}
          figmaLink={
            "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=0-1"
          }
          imageUrl={"/buymytix.png"}
          logoUrl={"/icons/buymytix-logo.png"}
        />
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] leading-relaxed">
              Mentor Square is a mobile application designed for mentors and
              professors, to efficiently and securely mark and manage student
              attendance.
              <br />
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/MentorSquare_v0.3"}
          figmaLink={
            "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-3"
          }
          imageUrl={"/mentorSquare.png"}
          logoUrl={"/icons/mentorsquare-logo.png"}
        />
      </div>
      {/* row 2 */}
      <div className="item-1 flex self-stretch relative md:bg-purple-950  rounded-xl md:shadow-[0px_4px_26.700000762939453px_8px_rgba(0,0,0,0.25)] overflow-hidden flex-col md:flex-row  gap-4">
        {/* 1st element */}
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] leading-relaxed">
              HopLite is a fitness workout split tracking app designed to help
              users track and manage their workout routines in the gym.
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/Hoplite-workoutPlanner"}
          figmaLink={
            "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-2"
          }
          imageUrl={"/hoplite.png"}
          logoUrl={"/icons/hoplite-logo.png"}
        />
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] leading-relaxed">
              StreamSync is a collaborative platform for real-time, synchronized
              streaming of torrent-based and online movies with friends,
              featuring chat and seamless controls.
              <br />
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/stream-sync"}
          figmaLink={
            "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-5"
          }
          imageUrl={"/stremSync.png"}
          logoUrl={"/icons/streamsync-logo.png"}
        />
      </div>
    </div>
  );
};

export default BentoBox;

interface ProjectCardProps {
  imageUrl: string;
  logoUrl: string;
  description: React.ReactNode;
  githubLink: string;
  figmaLink: string;
}

import { motion } from "framer-motion";

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  logoUrl,
  description,
  githubLink,
  figmaLink,
}) => {
  const [isTapped, setIsTapped] = useState(false);

  // Toggle on mobile touch
  const handleTouch = () => {
    if (window.innerWidth < 768) {
      setIsTapped((prev) => !prev);
    }
  };

  return (
    <motion.div
      className="element-container flex relative rounded-lg overflow-hidden min-h-[300px]"
      whileHover={{ scale: 1.02 }}
      onClick={handleTouch}
    >
      {/* Background Image */}
      <motion.img
        className="w-full object-cover origin-right"
        src={imageUrl}
        alt="project"
      />

      {/* Floating Details */}
      <motion.div
        className="floating-details-container rounded-lg overflow-clip w-full h-full bg-black absolute bottom-0 left-0 px-4 py-4 md:px-8 md:py-8 flex flex-col justify-end items-start gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={
          isTapped
            ? { opacity: 1, y: 0, backgroundColor: "rgba(0,0,0,0.9)" }
            : { opacity: 0, y: 50 }
        }
        whileHover={{
          opacity: 1,
          y: 0,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <img src={logoUrl} alt="logo" />
        <h3 className="text-white  font-light font-['Gabarito'] leading-relaxed">
          {description}
        </h3>
        <div className="links-container flex flex-row gap-4 ">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] hover:underline"
          >
            Github
          </a>
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 text-[clamp(16px,4.5vw,24px)] font-normal font-['Gabarito'] hover:underline"
          >
            Figma
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
