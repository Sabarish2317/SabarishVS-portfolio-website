import React, { useState } from "react";
import WorkScrollerText from "./workScrollerText";
import WorkScrollerVideo from "./WorkScrollerVideo";
import { motion } from "framer-motion";

const WorksScroller: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // animation for the list of elements

  return (
    // main container
    <div className="works-scroller-container w-full h-min pt-6 gap-6 items-center flex flex-col lg:flex-row my-8 ">
      {/* list of elements with chaning animation on scroll*/}
      <div className="list-column flex flex-col gap-1 w-full h-min">
        {/* elements 1 */}
        <WorkScrollerText
          loadingBarColor="#ff5733"
          loadingBarBackgroundColor="#333333"
          heading="APP DEVELOPMENT"
          content="I build cross-platform apps with Flutter, following BLoC architecture, clean code practices, and responsive design. My focus is on delivering smooth performance, intuitive navigation, and scalable code."
          childrenIndex={0}
          iscondensed={true}
        />
        {/* element 2 */}
        <WorkScrollerText
          loadingBarColor="#D420B3"
          loadingBarBackgroundColor="#333333"
          heading="WEB DEVELOPEMENT"
          content="I create fast, scalable, and responsive web applications using React. Prioritizing performance, accessibility, and modern UI/UX, I build interactive web experiences that stand out." //
          childrenIndex={0}
          iscondensed={false}
        />
        {/* element 3 */}
        <WorkScrollerText
          loadingBarColor="#251CDA"
          loadingBarBackgroundColor="#333333"
          heading="DESIGN SYSTEMS"
          content="I design scalable UI/UX systems in Figma, ensuring consistency and efficiency across platforms. My approach streamlines development with reusable components and structured design principles." //
          childrenIndex={0}
          iscondensed={true}
        />
      </div>
      {/* right side to display video based on the current row*/}

      <WorkScrollerVideo index={currentIndex} />
    </div>
  );
};

export default WorksScroller;
