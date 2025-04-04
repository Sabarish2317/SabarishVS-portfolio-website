import React, { useEffect, useRef, useState } from "react";
import WorkScrollerVideo from "./WorkScrollerVideo";
import WorkScrollerText from "./workScrollerText";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const WorksScroller: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the div with correct offset
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress into numbers
  const progressMotion = useTransform(scrollYProgress, [0, 1], [0, 400]); // 0% to 100%

  // State to store number values
  const [progress1, setProgress1] = useState(0);

  // Convert MotionValue to numbers
  useMotionValueEvent(progressMotion, "change", (v) => setProgress1(v));

  useEffect(() => {
    progressMotion.on("change", (value) => {
      console.log("Scroll Progress:", value);
    });
  }, [progressMotion]);

  return (
    <div
      ref={scrollRef}
      className="scroll-container h-[3000px] flex justify-start items-start relative "
    >
      <div className="works-scroller-container w-full overflow-clip pt-6 gap-2 md:gap-6 items-start flex flex-col lg:flex-row my-11 sticky top-32 ">
        {/* list of elements with individual videos */}
        <div className="list-column flex flex-col gap-0 w-full h-min ">
          {/* Element 1 */}
          <WorkScrollerText
            loadingBarColor="#ff5733"
            loadingBarBackgroundColor="#333333"
            heading="APP DEVELOPMENT"
            content="I build cross-platform apps with Flutter, following BLoC architecture, clean code practices, and responsive design. My focus is on delivering smooth performance, intuitive navigation, and scalable code."
            childrenIndex={0}
            iscondensed={!(progress1 < 100)} // Visible fully when scrollYProgress is 0-100
            progress={progress1.toString()}
          />

          {/* Element 2 */}
          <WorkScrollerText
            loadingBarColor="#D420B3"
            loadingBarBackgroundColor="#333333"
            heading="WEB DEVELOPMENT"
            content="I create fast, scalable, and responsive web applications using React. Prioritizing performance, accessibility, and modern UI/UX, I build interactive web experiences that stand out."
            childrenIndex={1}
            iscondensed={!(progress1 > 100 && progress1 < 200)} // Condensed when progress < 100
            progress={(progress1 % 100).toString()} // Adjusted progress
          />

          {/* Element 3 */}
          <WorkScrollerText
            loadingBarColor="#251CDA"
            loadingBarBackgroundColor="#333333"
            heading="DESIGN SYSTEMS"
            content="I design scalable UI/UX systems in Figma, ensuring consistency and efficiency across platforms. My approach streamlines development with reusable components and structured design principles."
            childrenIndex={2}
            iscondensed={!(progress1 > 200 && progress1 < 400)} // Condensed when progress < 200
            progress={(progress1 % 200).toString()} // Adjusted progress
          />

          <div className="mb-16"></div>
        </div>
        <WorkScrollerVideo
          index={progress1 < 100 ? 0 : progress1 < 200 ? 1 : 2}
        />
      </div>
    </div>
  );
};

export default WorksScroller;
