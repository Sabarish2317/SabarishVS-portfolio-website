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

export default SubText;
