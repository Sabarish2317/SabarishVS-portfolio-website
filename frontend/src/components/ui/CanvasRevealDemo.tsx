/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div
        className=" flex flex-col py-6 max-w-[75%] gap-4 lg:flex-row items-center w-full justify-between  
      transform transition-all duration-300 scale-100 sm:scale-80 md:scale-90 lg:scale-100"
      >
        <Card title="Beauty in Simplicity" icon={<h2>Design</h2>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Seamless Apps & Websites" icon={<h2>Develop</h2>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Exceptional Experiences" icon={<h2>Deliver</h2>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-2  margin-0 rounded-2xl overflow-clip border-[#9c07ff]/50 group/canvas-card flex items-center justify-center dark:border-[#9c07ff]/50  max-w-sm w-full p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white/[0.2] text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white/[0.2] text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white/[0.2] text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white/[0.2] text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center  text-[28px] font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className=" text-[28px] font-bold dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="gray-200"
      className={className}
      {...rest}
    >
      <path
        strokeLinecap="round"
        color="black"
        strokeLinejoin="round"
        d="M12 6v12m6-6H6"
      />
    </svg>
  );
};
