import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Snackbar = ({ message, show }: { message: string; show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-14 left-1/2 -translate-x-1/2 px-4 py-4 bg-gray-900 text-white text-lg rounded-lg shadow-lg"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSend = () => {
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000); // Hide after 3 sec
  };

  const handleClick = (number: number) => {
    const links: string[] = [
      "https://www.figma.com/design/B0yV8mexoHd8sdehMtqq6j/Personal-Project-ui-designs?node-id=1-5",
      "https://www.linkedin.com/in/sabarish--vs/",
      "mailto:sabarish_7@protonmail.com",
      "https://wa.me/+919344461476",
      "https://github.com/Sabarish2317",
    ];
    window.open(links[number], "_blank");
  };

  return (
    <div className="footer w-[90%] h-min items-center justify-between flex flex-row m-8">
      {/* Left Side */}
      <div className="left-side flex flex-col gap-6 justify-center items-center">
        <img className="w-[500px] h-min" src="footer-icon.svg" alt="sabarish" />
        <div className="social-link-row gap-[21px] hidden md:flex">
          {/* Social Buttons */}
          {["figma", "linkedin", "mail", "wp", "github"].map((icon, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="social-button border-2 bg-white/5 border-[#9c07ff]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 active:bg-white/[0.3]"
            >
              <img
                className="w-10 h-10 pointer-events-none"
                src={`/icons/${icon}.png`}
                alt={icon}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side flex">
        <div className="inline-flex flex-col justify-center items-end gap-3">
          <label className="self-stretch text-white text-3xl font-medium font-['Gabarito'] leading-9">
            Write a message
          </label>

          <div className="inline-flex justify-start items-start gap-3 w-full">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Your message..."
              className="min-w-96 px-6 py-4 bg-white bg-opacity-10 rounded-lg outline outline-1 outline-purple-600 outline-opacity-50 text-slate-50 text-opacity-80 text-2xl font-medium font-['Gabarito'] leading-7 placeholder:text-opacity-50 focus:outline-purple-400 w-full"
            />

            {/* Send Button */}
            <button
              className="px-8 py-4 bg-purple-800 rounded-lg shadow-md outline outline-2 outline-purple-950 text-white text-2xl font-medium font-['Gabarito'] leading-7 hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all ease-in-out duration-100"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Snackbar Notification */}
      <Snackbar message="Sent" show={showSnackbar} />
    </div>
  );
};

export default Footer;
