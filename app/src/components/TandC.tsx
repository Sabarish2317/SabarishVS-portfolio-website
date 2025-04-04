import React from "react";

const TandC: React.FC = () => {
  return (
    <div className="w-full justify-between items-center flex flex-row py-4">
      {/* Terms & Privacy Links */}
      <div className="flex justify-start items-center gap-10">
        <a
          href="https://github.com/Sabarish2317/SabarishVS-portfolio-website/blob/main/README.md"
          target="_blank"
          className="text-slate-50 text-opacity-40 text-2xl font-medium font-['Gabarito'] leading-7 hover:text-opacity-70 transition"
        >
          Terms & Conditions
        </a>
        <a
          target="_blank"
          href="https://github.com/Sabarish2317/SabarishVS-portfolio-website/blob/main/README.md"
          className="text-slate-50 text-opacity-40 text-2xl font-medium font-['Gabarito'] leading-7 hover:text-opacity-70 transition"
        >
          Privacy Policy
        </a>
      </div>

      {/* Footer Credit */}
      <div className="flex-1 text-right text-slate-50 text-opacity-40 text-2xl font-medium font-['Gabarito'] leading-7">
        Made by @Sabarish V S | © 2022 - {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default TandC;
