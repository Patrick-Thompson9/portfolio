import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const buttonClasses =
    "m-4 bg-emerald-200 hover:bg-blue-700 text-slate-700 font-bold py-2 px-4 rounded-full";

  return (
    <nav>
      <div className="relative container navbar h-20 flex justify-center gap-10 items-center max-w-full">
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
          <ThemeToggle />
        </div>
      </div>
      <div className="navSpacer waves"></div>
    </nav>
  );
}

export default NavBar;
