import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MainLayout from "./layouts/MainLayout";
import React, { useRef, useState } from "react";

type AppContextType = {
  cardsRef: React.RefObject<HTMLElement>;
  handleMouseMove: (e: React.MouseEvent<Element, MouseEvent>) => void;
  cursorPos: { x: number; y: number };
};

const AppContext = React.createContext<AppContextType | null>(null);

function App() {
  const cardsRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPos({ x: x, y: y });
    }
  };

  return (
    <AppContext.Provider value={{ cursorPos, cardsRef, handleMouseMove }}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
