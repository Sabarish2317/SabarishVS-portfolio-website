import React from "react";

interface WorkScrollerVideoProps {
  index: number;
}

const WorkScrollerVideo: React.FC<WorkScrollerVideoProps> = ({ index }) => {
  const selectVideo = (index: number): string => {
    switch (index) {
      case 0:
        return "app.mp4";
      case 1:
        return "desktop compo.mp4";
      default:
        return "design comp.mp4";
    }
  };

  return (
    <div className="right-side flex flex-col w-full min-h-full justify-center align-middle ">
      <video
        key={index}
        className="w-[100%] flex h-full min-h-full rounded-2xl object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={selectVideo(index)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WorkScrollerVideo;
