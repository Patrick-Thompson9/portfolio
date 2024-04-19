import { buttonClasses } from "../layouts/MainLayout";
import { motion } from "framer-motion";

function ShinyButton() {
  return (
    <motion.button
      className="m-10 py-2 px-4 bg-black rounded-md button-radial-gradient"
      onClick={() => console.log("Shiny Button Clicked!")}
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.5 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 2,
        type: "spring",
        stiffness: 30,
        damping: 20,
        mass: 0.5,
        scale: {
          type: "spring",
          stiffness: 1,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-slate-100 tracking-wide font-light size-full block relative linear-mask">
        Shiny Button
      </span>
    </motion.button>
  );
}

export default ShinyButton;
