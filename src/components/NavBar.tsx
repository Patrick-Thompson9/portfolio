import { NavLink } from "react-router-dom";
import lightWaves from "../assets/waves/NavBar_waves_day1.svg";
import darkWaves from "../assets/waves/NavBar_waves1.svg";
import useDarkMode from "../hooks/useDarkMode";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const buttonClasses = `m-4 transition duration-800 font-bold py-2 px-4 rounded-full bg-sky-400 hover:bg-blue-600 text-white shadow-md
  dark:bg-emerald-200 dark:hover:bg-emerald-500 dark:text-slate-700`;

  const [darkTheme, setDarkTheme] = useDarkMode();

  const speed = 0.2;
  let darkTransitionString = `opacity ${speed}s`;
  let lightTransitionString = `opacity ${speed}s`;
  if (darkTheme) {
    darkTransitionString += ` ease-out ${speed}s`;
    lightTransitionString += ` ease-in`;
  } else {
    lightTransitionString += ` ${speed}s`;
    darkTransitionString += ` ease-in`;
  }

  const lightWaveStyle = {
    transition: darkTransitionString,
    position: "absolute",
    width: "100%",
  } as React.CSSProperties;

  const darkWaveStyle = {
    transition: lightTransitionString,
    position: "absolute",
    width: "100%",
  } as React.CSSProperties;

  return (
    <nav className="mb-20">
      <div className="relative container bg-blue-500 h-20 flex justify-center gap-10 items-center max-w-full">
        <div className="flex items-center md:justify-between md:gap-10">
          <NavLink to="/" className={buttonClasses}>
            Home
          </NavLink>
          <NavLink to="/projects" className={buttonClasses}>
            Projects
          </NavLink>
          <NavLink to="/about" className={buttonClasses}>
            About
          </NavLink>
        </div>
        <div className="md:absolute right-5">
          <ThemeToggle
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
            classes={buttonClasses}
          />
        </div>
      </div>
      {/* <div className="navSpacer waves dark:darkWaves"></div> */}
      <img
        id="lightWaves"
        src={lightWaves}
        alt="Light Waves"
        style={{ ...lightWaveStyle, opacity: Number(!darkTheme) }}
      />
      <img
        id="darkWaves"
        src={darkWaves}
        alt="Dark Waves"
        style={{ ...darkWaveStyle, opacity: Number(darkTheme) }}
      />
    </nav>
  );
}

export default NavBar;
