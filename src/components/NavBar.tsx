import { NavLink } from "react-router-dom";
import lightWaves from "../assets/waves/NavBar_waves_day1.svg";
import darkWaves from "../assets/waves/NavBar_waves1.svg";
import useDarkMode from "../hooks/useDarkMode";
import ThemeToggle from "./ThemeToggle";
import KUTE from "kute.js";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function NavBar() {
  const buttonClasses = `m-4 transition duration-700 font-bold py-2 px-4 rounded-full bg-sky-400 hover:bg-blue-600 text-white shadow-md
  dark:bg-emerald-200 dark:hover:bg-emerald-500 dark:text-slate-700 hover:cursor-pointer`;

  const [darkTheme, setDarkTheme] = useDarkMode();

  const speed = 0.4;
  let darkTransitionString = `opacity ${speed}s`;
  let lightTransitionString = `opacity ${speed}s`;
  if (darkTheme) {
    darkTransitionString += ` ease-out ${speed}s`;
    lightTransitionString += ` ease-in ${speed}s`;
  } else {
    lightTransitionString += ` ease-out ${speed}s`;
    darkTransitionString += ` ease-in ${speed}s`;
  }

  const lightWaveStyle = {
    transition: darkTransitionString,
    position: "absolute",
    width: "100%",
  } as React.CSSProperties;

  const darkWaveStyle = {
    transition: lightTransitionString,
    width: "100%",
  } as React.CSSProperties;

  useEffect(() => {
    const script = document.createElement("script");

    try {
      script.innerHTML = `
    const animateWave1 = KUTE.fromTo(
      "#wave11",
      { path: "#wave11" },
      { path: "#wave21" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    const animateWave2 = KUTE.fromTo(
      "#wave12",
      { path: "#wave12" },
      { path: "#wave22" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    const animateWave3 = KUTE.fromTo(
      "#wave13",
      { path: "#wave13" },
      { path: "#wave23" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    const animateWave4 = KUTE.fromTo(
      "#wave14",
      { path: "#wave14" },
      { path: "#wave24" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    const animateWave5 = KUTE.fromTo(
      "#wave15",
      { path: "#wave15" },
      { path: "#wave25" },
      { repeat: 999, duration: 3000, yoyo: true }
    ).start();
    `;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } catch (error) {
      console.log("Error in NavBar.tsx: ", error);
    }
  }, []);

  const styler = {
    visibility: "hidden",
  } as React.CSSProperties;

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
      <svg
        id="visual"
        viewBox="0 0 960 300"
        width="960"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g id="wave1">
          <path
            id="wave11"
            d="M0 49L16 49.5C32 50 64 51 96 52.8C128 54.7 160 57.3 192 60.5C224 63.7 256 67.3 288 66.3C320 65.3 352 59.7 384 57.8C416 56 448 58 480 58.7C512 59.3 544 58.7 576 60.8C608 63 640 68 672 69.2C704 70.3 736 67.7 768 65C800 62.3 832 59.7 864 57C896 54.3 928 51.7 944 50.3L960 49L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="#58dabe"
          ></path>
          <path
            id="wave12"
            d="M0 53L16 51.2C32 49.3 64 45.7 96 45.3C128 45 160 48 192 48.3C224 48.7 256 46.3 288 44.3C320 42.3 352 40.7 384 40.5C416 40.3 448 41.7 480 41.5C512 41.3 544 39.7 576 42.2C608 44.7 640 51.3 672 53.5C704 55.7 736 53.3 768 50C800 46.7 832 42.3 864 42.2C896 42 928 46 944 48L960 50L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="#00cae4"
          ></path>
          <path
            id="wave13"
            d="M0 41L16 38.2C32 35.3 64 29.7 96 27.7C128 25.7 160 27.3 192 31.2C224 35 256 41 288 42C320 43 352 39 384 38C416 37 448 39 480 40.5C512 42 544 43 576 41.8C608 40.7 640 37.3 672 37C704 36.7 736 39.3 768 39.8C800 40.3 832 38.7 864 36.7C896 34.7 928 32.3 944 31.2L960 30L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="#00b1f9"
          ></path>
          <path
            id="wave14"
            d="M0 28L16 27.5C32 27 64 26 96 24.5C128 23 160 21 192 19.3C224 17.7 256 16.3 288 19C320 21.7 352 28.3 384 28.8C416 29.3 448 23.7 480 19.8C512 16 544 14 576 13.7C608 13.3 640 14.7 672 18.3C704 22 736 28 768 30.2C800 32.3 832 30.7 864 30.5C896 30.3 928 31.7 944 32.3L960 33L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="#0090ff"
          ></path>
          <path
            id="wave15"
            d="M0 15L16 13.3C32 11.7 64 8.3 96 6.3C128 4.3 160 3.7 192 3.7C224 3.7 256 4.3 288 5.8C320 7.3 352 9.7 384 10.5C416 11.3 448 10.7 480 12.2C512 13.7 544 17.3 576 18.2C608 19 640 17 672 13.8C704 10.7 736 6.3 768 6C800 5.7 832 9.3 864 11.3C896 13.3 928 13.7 944 13.8L960 14L960 0L944 0C928 0 896 0 864 0C832 0 800 0 768 0C736 0 704 0 672 0C640 0 608 0 576 0C544 0 512 0 480 0C448 0 416 0 384 0C352 0 320 0 288 0C256 0 224 0 192 0C160 0 128 0 96 0C64 0 32 0 16 0L0 0Z"
            fill="#0066ff"
          ></path>
        </g>
        <g id="wave2" style={styler}>
          <path
            id="wave21"
            d="M0 61L10.7 62.2C21.3 63.3 42.7 65.7 64 64.8C85.3 64 106.7 60 128 58.5C149.3 57 170.7 58 192 55.2C213.3 52.3 234.7 45.7 256 46.5C277.3 47.3 298.7 55.7 320 57.8C341.3 60 362.7 56 384 52C405.3 48 426.7 44 448 46C469.3 48 490.7 56 512 57.5C533.3 59 554.7 54 576 49.3C597.3 44.7 618.7 40.3 640 41.8C661.3 43.3 682.7 50.7 704 54.8C725.3 59 746.7 60 768 57.7C789.3 55.3 810.7 49.7 832 47.8C853.3 46 874.7 48 896 48.7C917.3 49.3 938.7 48.7 949.3 48.3L960 48L960 0L949.3 0C938.7 0 917.3 0 896 0C874.7 0 853.3 0 832 0C810.7 0 789.3 0 768 0C746.7 0 725.3 0 704 0C682.7 0 661.3 0 640 0C618.7 0 597.3 0 576 0C554.7 0 533.3 0 512 0C490.7 0 469.3 0 448 0C426.7 0 405.3 0 384 0C362.7 0 341.3 0 320 0C298.7 0 277.3 0 256 0C234.7 0 213.3 0 192 0C170.7 0 149.3 0 128 0C106.7 0 85.3 0 64 0C42.7 0 21.3 0 10.7 0L0 0Z"
            fill="#58dabe"
          ></path>
          <path
            id="wave22"
            d="M0 55L32 55.7C64 56.3 96 57.7 128 53.3C160 49 192 39 224 34.7C256 30.3 288 31.7 320 33.2C352 34.7 384 36.3 416 38.8C448 41.3 480 44.7 512 47.2C544 49.7 576 51.3 608 48.3C640 45.3 672 37.7 704 35.3C736 33 768 36 800 36.3C832 36.7 864 34.3 896 37.3C928 40.3 960 48.7 992 51.8C1024 55 1056 53 1088 49.2C1120 45.3 1152 39.7 1184 40.5C1216 41.3 1248 48.7 1280 48C1312 47.3 1344 38.7 1376 34.5C1408 30.3 1440 30.7 1472 30.8L1504 31L1504 0L1472 0C1440 0 1408 0 1376 0C1344 0 1312 0 1280 0C1248 0 1216 0 1184 0C1152 0 1120 0 1088 0C1056 0 1024 0 992 0C960 0 928 0 896 0C864 0 832 0 800 0C768 0 736 0 704 0C672 0 640 0 608 0C576 0 544 0 512 0C480 0 448 0 416 0C384 0 352 0 320 0C288 0 256 0 224 0C192 0 160 0 128 0C96 0 64 0 32 0L0 0Z"
            fill="#00cae4"
          ></path>
          <path
            id="wave23"
            d="M0 25L10.7 26.5C21.3 28 42.7 31 64 33.3C85.3 35.7 106.7 37.3 128 37.3C149.3 37.3 170.7 35.7 192 32.3C213.3 29 234.7 24 256 22.7C277.3 21.3 298.7 23.7 320 26.5C341.3 29.3 362.7 32.7 384 34.3C405.3 36 426.7 36 448 37.2C469.3 38.3 490.7 40.7 512 40.5C533.3 40.3 554.7 37.7 576 35.5C597.3 33.3 618.7 31.7 640 30.3C661.3 29 682.7 28 704 29.8C725.3 31.7 746.7 36.3 768 35.5C789.3 34.7 810.7 28.3 832 28.2C853.3 28 874.7 34 896 35.7C917.3 37.3 938.7 34.7 949.3 33.3L960 32L960 0L949.3 0C938.7 0 917.3 0 896 0C874.7 0 853.3 0 832 0C810.7 0 789.3 0 768 0C746.7 0 725.3 0 704 0C682.7 0 661.3 0 640 0C618.7 0 597.3 0 576 0C554.7 0 533.3 0 512 0C490.7 0 469.3 0 448 0C426.7 0 405.3 0 384 0C362.7 0 341.3 0 320 0C298.7 0 277.3 0 256 0C234.7 0 213.3 0 192 0C170.7 0 149.3 0 128 0C106.7 0 85.3 0 64 0C42.7 0 21.3 0 10.7 0L0 0Z"
            fill="#00b1f9"
          ></path>
          <path
            id="wave24"
            d="M0 31L10.7 28.3C21.3 25.7 42.7 20.3 64 18.3C85.3 16.3 106.7 17.7 128 20.8C149.3 24 170.7 29 192 28.2C213.3 27.3 234.7 20.7 256 18.7C277.3 16.7 298.7 19.3 320 22.2C341.3 25 362.7 28 384 27C405.3 26 426.7 21 448 18.5C469.3 16 490.7 16 512 18.3C533.3 20.7 554.7 25.3 576 27.5C597.3 29.7 618.7 29.3 640 27.7C661.3 26 682.7 23 704 23.7C725.3 24.3 746.7 28.7 768 28.8C789.3 29 810.7 25 832 23.7C853.3 22.3 874.7 23.7 896 22C917.3 20.3 938.7 15.7 949.3 13.3L960 11L960 0L949.3 0C938.7 0 917.3 0 896 0C874.7 0 853.3 0 832 0C810.7 0 789.3 0 768 0C746.7 0 725.3 0 704 0C682.7 0 661.3 0 640 0C618.7 0 597.3 0 576 0C554.7 0 533.3 0 512 0C490.7 0 469.3 0 448 0C426.7 0 405.3 0 384 0C362.7 0 341.3 0 320 0C298.7 0 277.3 0 256 0C234.7 0 213.3 0 192 0C170.7 0 149.3 0 128 0C106.7 0 85.3 0 64 0C42.7 0 21.3 0 10.7 0L0 0Z"
            fill="#0090ff"
          ></path>
          <path
            id="wave25"
            d="M0 12L10.7 13.7C21.3 15.3 42.7 18.7 64 16.8C85.3 15 106.7 8 128 7.7C149.3 7.3 170.7 13.7 192 14.2C213.3 14.7 234.7 9.3 256 7.2C277.3 5 298.7 6 320 8C341.3 10 362.7 13 384 12.8C405.3 12.7 426.7 9.3 448 7.7C469.3 6 490.7 6 512 6.2C533.3 6.3 554.7 6.7 576 6C597.3 5.3 618.7 3.7 640 5.8C661.3 8 682.7 14 704 17.3C725.3 20.7 746.7 21.3 768 20.3C789.3 19.3 810.7 16.7 832 13.5C853.3 10.3 874.7 6.7 896 7C917.3 7.3 938.7 11.7 949.3 13.8L960 16L960 0L949.3 0C938.7 0 917.3 0 896 0C874.7 0 853.3 0 832 0C810.7 0 789.3 0 768 0C746.7 0 725.3 0 704 0C682.7 0 661.3 0 640 0C618.7 0 597.3 0 576 0C554.7 0 533.3 0 512 0C490.7 0 469.3 0 448 0C426.7 0 405.3 0 384 0C362.7 0 341.3 0 320 0C298.7 0 277.3 0 256 0C234.7 0 213.3 0 192 0C170.7 0 149.3 0 128 0C106.7 0 85.3 0 64 0C42.7 0 21.3 0 10.7 0L0 0Z"
            fill="#0066ff"
          ></path>
        </g>
      </svg>
      {/* <div className="navSpacer waves dark:darkWaves"></div> */}

      {/* <img
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
      /> */}
    </nav>
  );
}

export default NavBar;
