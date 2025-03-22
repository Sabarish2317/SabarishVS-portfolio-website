import React from "react";

const BentoBox: React.FC = () => {
  return (
    <div className="row-1 self-stretch inline-flex justify-start items-center gap-3">
      <div className="w-[947px] h-96 relative bg-black bg-opacity-90 overflow-hidden">
        <div className="w-[619px] left-[36px] top-[266px] absolute inline-flex flex-col justify-start items-start gap-1.5">
          <div className="inline-flex justify-center items-center gap-2">
            <div className="w-6 h-6 bg-red-600" />
            <div className="text-center justify-start text-white text-2xl font-medium font-['Clash_Display_Variable'] leading-none">
              BuyMyTix
            </div>
          </div>
          <div className="self-stretch justify-center text-white text-xl font-normal font-['Gabarito'] leading-relaxed">
            Your mobile app journey begins with a simple idea and ends in a
            sophisticated design. We transform your initial thoughts into a
            sfbdjn.
          </div>
          <div className="self-stretch justify-center text-violet-500 text-xl font-normal font-['Gabarito'] leading-relaxed">
            Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
