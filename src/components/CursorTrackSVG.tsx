import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

interface props {
  d: string;
  size?: string;
  viewBox?: string;
  stroke?: string;
  gradientOffset?: { x: number; y: number };
}

let gradientIdCounter = 0;

function CursorTrackSVG({
  d,
  size = "7",
  viewBox = "512 512",
  stroke = "",
  gradientOffset = { x: 20, y: 10 },
}: props) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { cursorPos, cardsRef, mouseOnCard, darkTheme } = context;
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  // Generate a unique id for the gradient
  const gradientId = `linkGradient${gradientIdCounter++}`;

  useEffect(() => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      setGradientCenter({
        cx: `${(cursorPos.x / rect.width) * 100 - gradientOffset.x}%`,
        cy: `${(cursorPos.y / rect.height) * 100 - gradientOffset.y}%`,
      });
    }
  }, [cursorPos, cardsRef]);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="up-right-from-square"
      className={`size-${size} ${stroke}`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBox}`}
    >
      <defs>
        <radialGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          r="50%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && (
            <stop stopColor={darkTheme ? "#f7f7f7" : "#3c3c3c"} />
          )}
          <stop offset="1" stopColor={darkTheme ? "#34d399" : "#38bdf8"} />
        </radialGradient>
      </defs>
      <path fill="currentColor" stroke={`url(#${gradientId})`} d={d}></path>
    </svg>
  );
}

export default CursorTrackSVG;
