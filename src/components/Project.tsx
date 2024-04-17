import { NavLink } from "react-router-dom";
import gitHubLogo from "../assets/logos/github-logo.svg";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

interface buttonClasses {
  buttonClasses: string;
}

function Project({ buttonClasses }: buttonClasses) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { cursorPos, cardsRef, handleMouseMove, mouseOnCard, setMouseOnCard } =
    context;
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      setGradientCenter({
        cx: `${(cursorPos.x / rect.width) * 100 - 15}%`,
        cy: `${(cursorPos.y / rect.height) * 100 - 10}%`,
      });
    }
  }, [cursorPos, cardsRef]);

  return (
    <section
      ref={cardsRef}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
      className="lg:w-2/3 lg:mx-auto shadow-lg transition duration-1000 border-2 border-neutral-300 bg-slate-200 text-black p-10 rounded-lg
     stroke-[10] hover:stroke-[20] dark:bg-slate-600 dark:text-white dark:border-neutral-600"
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
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="up-right-from-square"
                className="svg-inline--fa fa-up-right-from-square size-7 transition duration-200"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <defs>
                  <radialGradient
                    id="linkGradient"
                    gradientUnits="userSpaceOnUse"
                    r="50%"
                    cx={gradientCenter.cx}
                    cy={gradientCenter.cy}
                  >
                    {mouseOnCard && <stop stopColor="#f7f7f7" />}
                    <stop offset="1" stopColor="#34d399" />
                  </radialGradient>
                </defs>
                <path
                  fill="currentColor"
                  stroke="url(#linkGradient)"
                  d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                ></path>
              </svg>
              <span className="hidden sm:block">Link to Live Site</span>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Project;
