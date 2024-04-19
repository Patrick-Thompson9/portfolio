import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import MainLayout from "./layouts/MainLayout";
import React from "react";
import useDarkMode from "./hooks/useDarkMode";
import NotFoundPage from "./pages/NotFoundPage";

// Defining context to help pass the dark theme state to all components
type AppContextType = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = React.createContext<AppContextType | null>(null);

function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
