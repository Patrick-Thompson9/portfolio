import { NavLink } from "react-router-dom";
import gitHubLogo from "../assets/logos/github-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface buttonClasses {
  buttonClasses: string;
}

function Project({ buttonClasses }: buttonClasses) {
  return (
    <section
      className="lg:w-2/3 lg:mx-auto shadow-lg transition duration-1000 bg-slate-200 text-black p-10 rounded-lg
     dark:bg-slate-600 dark:text-white"
    >
      <div className="flex flex-col items-center justify-center">
        <span>Project Name</span>
        <img src="Example" alt="Example Gif of Project"></img>
        <div className="flex justify-center md:justify-between items-center md:gap-20">
          <NavLink
            to="https://github.com/Patrick-Thompson9"
            className={buttonClasses}
          >
            <div className="flex items-center justify-start gap-2">
              <img src={gitHubLogo} className="size-8"></img>
              <span className="hidden sm:block">Link to Github</span>
            </div>
          </NavLink>
          <NavLink to="https://example.com" className={buttonClasses}>
            <div className="flex items-center justify-start gap-2">
              <FontAwesomeIcon icon={faUpRightFromSquare} className="size-7" />
              <span className="hidden sm:block">Link to Live Site</span>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Project;
