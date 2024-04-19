import { useContext } from "react";
import { AppContext } from "../App";
import { motion } from "framer-motion";

interface props {
  buttonText: string;
}

function ShinyButton({ buttonText }: props) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const darkTheme = context.darkTheme;
  const radialGradientClasses = darkTheme
    ? "dark-button-radial-gradient"
    : "button-radial-gradient";
  const linearOverlayClasses = darkTheme
    ? "dark-linear-overlay"
    : "linear-overlay";
  const textClasses = darkTheme ? "text-slate-900" : "text-slate-100";

  return (
    <motion.button
      className={`relative m-10 py-2 px-4 bg-white rounded-md transition-colors duration-1000 ${radialGradientClasses}`}
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.03 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 12,
        damping: 20,
        mass: 0.5,
        scale: {
          type: "spring",
          stiffness: 35,
          damping: 3,
          mass: 0.2,
        },
      }}
    >
      <span
        className={`${textClasses} tracking-wide font-light size-full block relative linear-mask transition-colors duration-1000`}
      >
        {buttonText}
      </span>
      <span
        className={`block absolute inset-0 rounded-md p-0.5 ${linearOverlayClasses}`}
      ></span>
    </motion.button>
  );
}

export default ShinyButton;
