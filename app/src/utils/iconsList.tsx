import React from "react";

const Item1: React.FC = () => {
  return (
    <>
      {/* Icons Row */}
      <div className="icons-row flex flex-row gap-1 md:gap-3 lg:gap-4">
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center justify-start">
          {/* <img
            src="/icons/flutter-icon.svg"
            alt="flutter"
            className="transform scale-75 md:scale-90 lg:scale-100"
          /> */}
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            Flutter
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            PostgreSQL
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            MySQL
          </div>
        </div>
      </div>
    </>
  );
};

const Item2: React.FC = () => {
  return (
    <>
      {/* Icons Row */}
      <div className="icons-row flex flex-row gap-1 md:gap-3 lg:gap-4">
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center justify-start">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            ReactJS
          </div>
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            NextJS
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            MongoDb
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            NodeJS
          </div>
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            Tail-Wind CSS
          </div>
        </div>
      </div>
    </>
  );
};

const Item3: React.FC = () => {
  return (
    <>
      {/* Icons Row */}
      <div className="icons-row flex flex-row gap-1 md:gap-3 lg:gap-4">
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center justify-start">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            Figma
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            Responsive design
          </div>
        </div>
        {/* Icon */}
        <div className="icons flex flex-row gap-1 md:gap-2 items-center">
          <div className="text-white/80 text-[clamp(14px,3vw,22px)] font-regular font-['Gabarito']">
            Mobile & Web design system
          </div>
        </div>
      </div>
    </>
  );
};

const items: React.FC[] = [Item1, Item2, Item3];

export default items;
