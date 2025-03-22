import React from "react";
import WorkScrollerText from "./WorkScrollerText";
import WorkScrollerVideo from "./WorkScrollerVideo";
import BentoBox from "../bentoBox";

const WorksScroller: React.FC = () => {
  return (
    // main container
    <div className="scroll-container ">
      <div className="works-scroller-container w-full overflow-clip pt-6 gap-6 items-center flex flex-col lg:flex-row my-8">
        {/* list of elements with individual videos */}
        <div className="list-column flex flex-col gap-12 w-full h-min">
          {/* Element 1 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
            <WorkScrollerText
              loadingBarColor="#ff5733"
              loadingBarBackgroundColor="#333333"
              heading="APP DEVELOPMENT"
              content="I build cross-platform apps with Flutter, following BLoC architecture, clean code practices, and responsive design. My focus is on delivering smooth performance, intuitive navigation, and scalable code."
              childrenIndex={0}
              iscondensed={false}
              progress="75"
            />
            <WorkScrollerVideo index={0} />
          </div>

          {/* Element 2 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
            <WorkScrollerText
              loadingBarColor="#D420B3"
              loadingBarBackgroundColor="#333333"
              heading="WEB DEVELOPMENT"
              content="I create fast, scalable, and responsive web applications using React. Prioritizing performance, accessibility, and modern UI/UX, I build interactive web experiences that stand out."
              childrenIndex={1}
              iscondensed={false}
              progress="75"
            />
            <WorkScrollerVideo index={1} />
          </div>

          {/* Element 3 */}
          <div className="flex flex-col lg:flex-row gap-4 items-center w-full">
            <WorkScrollerText
              loadingBarColor="#251CDA"
              loadingBarBackgroundColor="#333333"
              heading="DESIGN SYSTEMS"
              content="I design scalable UI/UX systems in Figma, ensuring consistency and efficiency across platforms. My approach streamlines development with reusable components and structured design principles."
              childrenIndex={2}
              iscondensed={false}
              progress="75"
            />
            <WorkScrollerVideo index={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksScroller;
