import React, { useRef, useState } from "react";
import WorkScrollerText from "./workScrollerText";
import WorkScrollerVideo from "./WorkScrollerVideo";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const WorksScroller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progresValue, setProgressValue] = useState(0);
  // animation for the list of elements
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const progress = useTransform(scrollYProgress, [0, 1], [300, 0]);
  useMotionValueEvent(progress, "change", (value) => {
    setProgressValue(value);
    setCurrentIndex(progresValue < 100 ? 0 : progresValue < 200 ? 1 : 2);
    console.log(value);
  });
  return (
    // main container
    <div
      ref={containerRef}
      className="works-scroller-container w-full h-min pt-6 gap-6 items-center flex flex-col lg:flex-row my-8 "
    >
      {/* list of elements with chaning animation on scroll*/}
      <div className="list-column flex flex-col gap-1 w-full h-min">
        <WorkScrollerText
          loadingBarColor="#ff5733"
          loadingBarBackgroundColor="#333333"
          heading="APP DEVELOPMENT"
          content="I build cross-platform apps with Flutter, following BLoC architecture, clean code practices, and responsive design."
          childrenIndex={0}
          iscondensed={!(progresValue < 100)}
          progress={progresValue.toString()}
        />
        <WorkScrollerText
          loadingBarColor="#D420B3"
          loadingBarBackgroundColor="#333333"
          heading="WEB DEVELOPMENT"
          content="I create fast, scalable, and responsive web applications using React."
          childrenIndex={0}
          iscondensed={!(progresValue >= 100 && progresValue < 200)}
          progress={(progresValue / 2).toString()}
        />
        <WorkScrollerText
          loadingBarColor="#251CDA"
          loadingBarBackgroundColor="#333333"
          heading="DESIGN SYSTEMS"
          content="I design scalable UI/UX systems in Figma."
          childrenIndex={0}
          iscondensed={!(progresValue >= 200)}
          progress={(progresValue / 3).toString()}
        />
      </div>
      {/* right side to display video based on the current row*/}

      <WorkScrollerVideo index={currentIndex} />
    </div>
  );
};

export default WorksScroller;
