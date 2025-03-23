import { motion } from "framer-motion";
import React from "react";

interface CarouselProps {
  className: string;
  start: string;
  end: string;
  transform: string;
}

const items = [
  { img: "/outline-icons/ts.png", name: "TypeScript" },
  { img: "/outline-icons/mongodb.png", name: "MongoDB" },
  { img: "/outline-icons/react.png", name: "ReactJS" },
  { img: "/outline-icons/figma.png", name: "Figma" },
  { img: "/outline-icons/postgresql.png", name: "PostgreSQL" },
  { img: "/outline-icons/flutter.png", name: "Flutter" },
  { img: "/outline-icons/express.png", name: "ExpressJS" },
  { img: "/outline-icons/tailwind.png", name: "TailwindCSS" },
  { img: "/outline-icons/bloc.png", name: "Bloc" },
  { img: "/outline-icons/redux.png", name: "Redux" },
  { img: "/outline-icons/vercel.png", name: "Vercel" },
  { img: "/outline-icons/ts.png", name: "TypeScript" },
  { img: "/outline-icons/mongodb.png", name: "MongoDB" },
  { img: "/outline-icons/react.png", name: "ReactJS" },
  { img: "/outline-icons/figma.png", name: "Figma" },
  { img: "/outline-icons/postgresql.png", name: "PostgreSQL" },
  { img: "/outline-icons/flutter.png", name: "Flutter" },
  { img: "/outline-icons/express.png", name: "ExpressJS" },
  { img: "/outline-icons/tailwind.png", name: "TailwindCSS" },
  { img: "/outline-icons/bloc.png", name: "Bloc" },
  { img: "/outline-icons/redux.png", name: "Redux" },
  { img: "/outline-icons/vercel.png", name: "Vercel" },
  { img: "/outline-icons/ts.png", name: "TypeScript" },
  { img: "/outline-icons/mongodb.png", name: "MongoDB" },
  { img: "/outline-icons/react.png", name: "ReactJS" },
  { img: "/outline-icons/figma.png", name: "Figma" },
  { img: "/outline-icons/postgresql.png", name: "PostgreSQL" },
  { img: "/outline-icons/flutter.png", name: "Flutter" },
  { img: "/outline-icons/express.png", name: "ExpressJS" },
  { img: "/outline-icons/tailwind.png", name: "TailwindCSS" },
  { img: "/outline-icons/bloc.png", name: "Bloc" },
  { img: "/outline-icons/redux.png", name: "Redux" },
  { img: "/outline-icons/vercel.png", name: "Vercel" },
  { img: "/outline-icons/ts.png", name: "TypeScript" },
  { img: "/outline-icons/mongodb.png", name: "MongoDB" },
  { img: "/outline-icons/react.png", name: "ReactJS" },
  { img: "/outline-icons/figma.png", name: "Figma" },
  { img: "/outline-icons/postgresql.png", name: "PostgreSQL" },
  { img: "/outline-icons/flutter.png", name: "Flutter" },
  { img: "/outline-icons/express.png", name: "ExpressJS" },
  { img: "/outline-icons/tailwind.png", name: "TailwindCSS" },
  { img: "/outline-icons/bloc.png", name: "Bloc" },
  { img: "/outline-icons/redux.png", name: "Redux" },
  { img: "/outline-icons/vercel.png", name: "Vercel" },
  { img: "/outline-icons/ts.png", name: "TypeScript" },
  { img: "/outline-icons/mongodb.png", name: "MongoDB" },
  { img: "/outline-icons/react.png", name: "ReactJS" },
  { img: "/outline-icons/figma.png", name: "Figma" },
  { img: "/outline-icons/postgresql.png", name: "PostgreSQL" },
  { img: "/outline-icons/flutter.png", name: "Flutter" },
  { img: "/outline-icons/express.png", name: "ExpressJS" },
  { img: "/outline-icons/tailwind.png", name: "TailwindCSS" },
  { img: "/outline-icons/bloc.png", name: "Bloc" },
  { img: "/outline-icons/redux.png", name: "Redux" },
  { img: "/outline-icons/vercel.png", name: "Vercel" },
];

// Duplicate items to create a seamless effect
const scrollingItems = [...items, ...items];

const Carousel: React.FC<CarouselProps> = ({
  className,
  start,
  end,
  transform,
}) => {
  return (
    <div
      style={{ transform: transform }}
      className={`relative w-full rotate-12 ${className}`}
    >
      <motion.div
        className={`flex w-max items-center gap-6 text-white text-2xl font-['Gabarito'] ${className}`}
        style={{ transform: transform }}
        animate={{ x: [start, end] }} // Moves halfway, then resets
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
      >
        {scrollingItems.map((item, index) => (
          <div key={index} className="flex justify-start items-center gap-2">
            <img src={item.img} className="w-14 h-14" alt={item.name} />
            <div className="w-max">{item.name}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
