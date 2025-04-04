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
          className="w-full px-6 py-4 bg-gray-900 text-white text-lg rounded-lg shadow-lg z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrSnackbar, setShowErrSnackbar] = useState(false);
  const [showErrSnackbar2, setShowErrSnackbar2] = useState(false);
  const [showLoadingSnackbar, setShowLoadingSnackbar] = useState(false);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.length <= 5) {
      setShowErrSnackbar2(true);
      setTimeout(() => setShowErrSnackbar2(false), 3000);
      return;
    }
    const formData = new FormData();
    formData.append("access_key", "a2790c1f-b46d-443c-90db-c04c053844c3");
    formData.append("message", input);

    try {
      setShowLoadingSnackbar(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setShowLoadingSnackbar(false);
        setShowSnackbar(true);
        setInput("");
        setTimeout(() => setShowSnackbar(false), 3000);
      } else {
        setShowLoadingSnackbar(false);
        setShowErrSnackbar(true);
        setTimeout(() => setShowErrSnackbar(false), 3000);
      }
    } catch (err) {
      setShowLoadingSnackbar(false);
      setShowErrSnackbar(true);
      setTimeout(() => setShowErrSnackbar(false), 3000);
    }
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
    <div className="footer w-[90%] h-min items-center justify-between flex flex-col m-8 relative lg:flex-row gap-8 md:gap-8 lg:gap-16">
      {/* Left Side */}
      <div className="left-side flex flex-col gap-6 justify-center content-center items-center">
        <img className="w-[500px] h-min" src="footer-icon.svg" alt="sabarish" />
        <div className="w-full social-link-row flex self-center flex-row scale-3d scale-  md:scale-100 justify-center items-end gap-3">
          {/* figma */}
          <button
            onClick={() => handleClick(4)}
            className="social-button border-2 min-w-max bg-white/5  border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5  rounded-[21px]
        transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d  active:bg-white/[0.3]"
          >
            <img
              className="w-10 h-10 pointer-events-none"
              src="/icons/figma.png"
              alt="github transition-all duration-300 ease-in-out active:bg-white/[0.2]"
            />
          </button>
          {/* linkedin */}
          <button
            onClick={() => handleClick(0)}
            className="social-button border-2 bg-white/5  border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5  rounded-[21px]
        transition-all duration-300 ease-in-out hover:scale-105 active:scale-110 scale-3d  active:bg-white/[0.3] min-w-max"
          >
            <img
              className="w-10 h-10 pointer-events-none"
              src="/icons/linkedin.png"
              alt="github transition-all duration-300 ease-in-out active:bg-white/[0.2]"
            />
          </button>
          {/* proton mail */}
          <button
            onClick={() => handleClick(1)}
            className="social-button border-2 bg-white/5 border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d min-w-max"
          >
            <img
              className="w-10 h-10 pointer-events-none"
              src="/icons/mail.png"
              alt="proton mail"
            />
          </button>
          {/* whatsapp */}
          <button
            onClick={() => handleClick(2)}
            className="social-button border-2 bg-white/5 border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d min-w-max"
          >
            <img
              className="w-10 h-10 pointer-events-none"
              src="/icons/wp.png"
              alt="whatsapp"
            />
          </button>
          {/* github */}
          <button
            onClick={() => handleClick(3)}
            className="social-button  border-2 bg-white/5 border-[#7C5EEA]/50 backdrop-blur-[35.70px] px-2.5 py-2.5 rounded-[21px] 
        transition-all duration-300 ease-in-out active:bg-white/[0.2] hover:scale-105 active:scale-110 scale-3d min-w-max"
          >
            <img
              className="w-10 h-10 pointer-events-none"
              src="/icons/github.png"
              alt="github"
            />
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side w-full flex relative">
        <div className="flex flex-col w-full justify-center items-end gap-3">
          <label className="self-stretch text-white text-[clamp(21px,4.5vw,28px)] font-medium font-['Gabarito'] leading-9">
            Write a message
          </label>

          <div className="flex justify-start items-center gap-3 w-full">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your message..."
              value={input}
              className="self-stretch px-6 py-4 bg-white bg-opacity-10 outline-offset-[-2px] rounded-lg outline outline-1 outline-[#6E4AEE] outline-opacity-50 text-slate-50 text-opacity-80 text-[clamp(21px,4.5vw,28px)] font-medium font-['Gabarito'] leading-7 placeholder:text-opacity-50 focus:outline-purple-400 w-full"
            />

            <button
              className="px-8 py-4  rounded-lg shadow-md outline outline-2 bg-[#6E4AEE] outline-[#6E4AEE] text-white text-[clamp(21px,4.5vw,28px)] font-medium font-['Gabarito'] leading-7 hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all ease-in-out duration-100"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
          {/* Snackbar Notification */}
          <Snackbar message="Message sent successfully" show={showSnackbar} />
          <Snackbar message="Error sending message" show={showErrSnackbar} />
          <Snackbar message="Sending message" show={showLoadingSnackbar} />
          <Snackbar message="Message too short" show={showErrSnackbar2} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
