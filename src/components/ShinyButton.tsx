import { buttonClasses } from "../layouts/MainLayout";
import { motion } from "framer-motion";

function ShinyButton() {
  return (
    <motion.button
      className="relative m-10 py-2 px-4 bg-black rounded-md button-radial-gradient"
      onClick={() => console.log("Shiny Button Clicked!")}
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.95 }}
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
      <span className="text-slate-100 tracking-wide font-light size-full block relative linear-mask">
        Shiny Button
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay"></span>
    </motion.button>
  );
}

export default ShinyButton;
