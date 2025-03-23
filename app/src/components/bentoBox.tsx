import React from "react";

const BentoBox: React.FC = () => {
  return (
    <div className="bento-Container p-3 rounded-2xl flex flex-col justify-start items-start gap-3 overflow-hidden ">
      {/*  row 1*/}
      <div className="item-1 flex self-stretch relative bg-purple-950  rounded-xl shadow-[0px_4px_26.700000762939453px_8px_rgba(0,0,0,0.25)] overflow-hidden flex-row gap-4">
        {/* 1st element */}
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-xl font-normal font-['Gabarito'] leading-relaxed">
              Buy My Tix is a web platform for buying and reselling tickets for
              movies, concerts, and sports events. Built with modern web
              technologies, it ensures a seamless and secure user experience for
              ticket transactions.
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/BuyMyTix"}
          figmaLink={""}
          imageUrl={"/buymytix.png"}
          logoUrl={"/icons/buymytix-logo.png"}
        />
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-xl font-normal font-['Gabarito'] leading-relaxed">
              Mentor Square is a mobile application designed for mentors and
              professors, to efficiently and securely mark and manage student
              attendance.
              <br />
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/MentorSquare_v0.3"}
          figmaLink={""}
          imageUrl={"/mentorSquare.png"}
          logoUrl={"/icons/mentorsquare-logo.png"}
        />
      </div>
      {/* row 2 */}
      <div className="item-1 flex self-stretch relative bg-purple-950  rounded-xl shadow-[0px_4px_26.700000762939453px_8px_rgba(0,0,0,0.25)] overflow-hidden flex-row gap-4">
        {/* 1st element */}
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-xl font-normal font-['Gabarito'] leading-relaxed">
              HopLite is a fitness workout split tracking app designed to help
              users track and manage their workout routines in the gym.
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/Hoplite-workoutPlanner"}
          figmaLink={""}
          imageUrl={"/hoplite.png"}
          logoUrl={"/icons/hoplite-logo.png"}
        />
        <ProjectCard
          description={
            <h3 className="justify-center text-white text-xl font-normal font-['Gabarito'] leading-relaxed">
              StreamSync is a collaborative platform for real-time, synchronized
              streaming of torrent-based and online movies with friends,
              featuring chat and seamless controls.
              <br />
            </h3>
          }
          githubLink={"https://github.com/Sabarish2317/stream-sync"}
          figmaLink={""}
          imageUrl={"/stremSync.png"}
          logoUrl={"/icons/streamsync-logo.png"}
        />
      </div>
    </div>
  );
};

export default BentoBox;

import { motion } from "framer-motion";

interface ProjectCardProps {
  imageUrl: string;
  logoUrl: string;
  description: React.ReactNode;
  githubLink: string;
  figmaLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  logoUrl,
  description,
  githubLink,
  figmaLink,
}) => {
  return (
    <motion.div
      className="element-container flex relative rounded-lg overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image */}
      <motion.img
        className="w-full fit origin-right"
        src={imageUrl}
        alt="project"
      />

      {/* Floating Details */}
      <motion.div
        className="floating-details-container rounded-lg overflow-clip w-full h-full bg-black absolute bottom-0 left-0 px-8 py-8 flex flex-col justify-end items-start gap-3"
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0, backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <img src={logoUrl} alt="logo" />
        <h3 className="text-white text-xl font-light font-['Gabarito'] leading-relaxed">
          {description}
        </h3>
        <div className="links-container flex flex-row gap-4 ">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 text-xl font-normal font-['Gabarito'] hover:underline"
          >
            Github
          </a>
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 text-xl font-normal font-['Gabarito'] hover:underline"
          >
            Figma
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
