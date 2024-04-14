import { NavLink } from "react-router-dom";
import lightWaves from "../assets/waves/NavBar_waves_day1.svg";
import darkWaves from "../assets/waves/NavBar_waves1.svg";
import useDarkMode from "../hooks/useDarkMode";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const buttonClasses = `m-4 font-bold py-2 px-4 rounded-full bg-sky-400 hover:bg-blue-600 text-white shadow-md
    dark:bg-emerald-200 dark:hover:bg-emerald-500 dark:text-slate-700`;

  const [darkTheme, setDarkTheme] = useDarkMode();

  const waves = darkTheme ? darkWaves : lightWaves;

  return (
    <nav>
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
      <img className="navSpacer" src={waves} />
    </nav>
  );
}

export default NavBar;
