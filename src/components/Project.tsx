import { NavLink } from "react-router-dom";
import gitHubLogo from "../assets/logos/github-logo.svg";
// import LinkLogo from "../assets/logos/link-logo.svg";
import { useContext } from "react";
import { AppContext } from "../App";
import CursorTrackSVG from "./CursorTrackSVG";
import { buttonClasses } from "../layouts/MainLayout";

function Project() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { cardsRef, handleMouseMove, setMouseOnCard } = context;

  return (
    <section
      ref={cardsRef}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      className="lg:w-2/3 lg:mx-auto shadow-lg transition duration-1000 border-2 border-neutral-300 bg-slate-200 text-black p-10 rounded-lg
     stroke-[10] hover:stroke-[20] my-5 dark:bg-slate-600 dark:text-white dark:border-neutral-500"
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
              <CursorTrackSVG
                className="size-8 stroke-[5]"
                viewBox="100 100"
                gradientOffset={{ x: -20, y: 10 }}
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              />
              <span className="hidden sm:block">Link to Github</span>
            </div>
          </NavLink>
          <NavLink to="https://example.com" className={buttonClasses}>
            <div className="flex items-center justify-start gap-2">
              <CursorTrackSVG d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              <span className="hidden sm:block">Link to Live Site</span>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Project;
