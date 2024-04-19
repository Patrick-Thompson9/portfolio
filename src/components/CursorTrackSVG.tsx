import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";

interface props {
  projectRef: React.RefObject<HTMLElement>;
  cursorPos: { x: number; y: number };
  mouseOnCard: boolean;
  d: string;
  className?: string;
  viewBox?: string;
  gradientOffset?: { x: number; y: number };
}

let gradientIdCounter = 0;

function CursorTrackSVG({
  projectRef,
  cursorPos,
  mouseOnCard,
  d,
  viewBox = "512 512",
  className = "size-7",
  gradientOffset = { x: 20, y: 10 },
}: props) {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { darkTheme } = context;

  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });

  // Generate a unique id for the gradient
  const gradientId = `linkGradient${gradientIdCounter++}`;

  // Update the gradient center based on the cursor position
  useEffect(() => {
    if (projectRef.current !== null) {
      const rect = projectRef.current.getBoundingClientRect();
      setGradientCenter({
        cx: `${(cursorPos.x / rect.width) * 100 - gradientOffset.x}%`,
        cy: `${(cursorPos.y / rect.height) * 100 - gradientOffset.y}%`,
      });
    }
  }, [cursorPos, projectRef]);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="up-right-from-square"
      className={`${className} cursor-pointer`}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBox}`}
    >
      <defs>
        <radialGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          r="40%"
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
