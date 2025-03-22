import React from "react";

const SubText: React.FC = () => {
  return (
    <div className="py-8 flex-col justify-center items-start gap-[42px] inline-flex">
      <div className="text-white text-[28px] font-medium font-['Gabarito'] leading-[33.60px]">
        I thrive on mastering my craft while
        <br />
        exploring a wide range of skills,{" "}
      </div>
      <div>
        <span className="text-white text-[28px] font-medium font-['Gabarito'] leading-[33.60px]">
          Ensuring depth where it matters and versatility where
          <br />
          it counts. I will{" "}
        </span>
        <span className="text-white text-[28px] font-extrabold font-['Gabarito'] leading-[33.60px]">
          Design
        </span>
        <span className="text-white text-[28px] font-medium font-['Gabarito'] leading-[33.60px]">
          ,{" "}
        </span>
        <span className="text-white text-[28px] font-bold font-['Gabarito'] leading-[33.60px]">
          Develop
        </span>
        <span className="text-white text-[28px] font-medium font-['Gabarito'] leading-[33.60px]">
          {" "}
          &
        </span>
        <span className="text-white text-[28px] font-bold font-['Gabarito'] leading-[33.60px]">
          {" "}
          Deliver
        </span>
      </div>
    </div>
  );
};

const SubText2: React.FC = () => {
  return (
    <div className="py-12 inline-flex flex-col justify-center items-start gap-10 font-['Gabarito'] leading-[33.60px]">
      <div className="justify-center text-white text-3xl font-medium ">
        I love crafting stunning apps and websites <br />
        Blending creativity with seamless function.
      </div>
      <div className="justify-center text-white text-3xl font-medium flex ">
        Bringing ideas to life with design and code,
        <br />
        Here's a glimpse of what I've built.
      </div>
    </div>
  );
};

export { SubText, SubText2 };
