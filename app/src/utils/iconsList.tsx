import React from "react";

const Item1: React.FC = () => {
  return (
    <div className="tools-row flex flex-wrap gap-3 md:gap-3 lg:gap-4 font-regular font-['Gabarito'] text-white/70 text-[clamp(18px,4.5vw,28px)] px-2 py-4 leading-none">
      <div className="w-max">Flutter</div>
      <div className="w-max">Bloc-Architecture</div>
      <div className="w-max">Material-UI-Kit</div>
      <div className="w-max">Swift-UI-Kit</div>
      <div className="w-max">Firebase</div>
      <div className="w-max">Rest APIs</div>
      <div className="w-max">PostgreSQL</div>
      <div className="w-max">MongoDB</div>
      <div className="w-max">Express JS</div>
    </div>
  );
};

const Item2: React.FC = () => {
  return (
    <div className="tools-row flex flex-wrap gap-3 md:gap-3 lg:gap-4 font-regular font-['Gabarito'] text-white/70 text-[clamp(18px,4.5vw,28px)] px-2 py-4 leading-none">
      <div className="w-max">ReactJS</div>
      <div className="w-max">NextJS</div>
      <div className="w-max">TypeScript</div>
      <div className="w-max">Redux</div>
      <div className="w-max">Tailwind CSS</div>
      <div className="w-max">ShadCN</div>
      <div className="w-max">Framer/Motion</div>
      <div className="w-max">Vercel</div>
    </div>
  );
};

const Item3: React.FC = () => {
  return (
    <div className="tools-row flex flex-wrap gap-3 md:gap-3 lg:gap-4 font-regular font-['Gabarito'] text-white/70 text-[clamp(18px,4.5vw,28px)] px-2 py-4 leading-none">
      <div className="w-max">Figma</div>
      <div className="w-max">Component-based UI</div>
      <div className="w-max">Responsive Design</div>
    </div>
  );
};

const items: React.FC[] = [Item1, Item2, Item3];

export default items;
