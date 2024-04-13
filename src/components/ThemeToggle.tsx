interface ThemeToggleProps {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeToggle = ({ darkTheme, setDarkTheme }: ThemeToggleProps) => {
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return <span onClick={handleMode}>{darkTheme ? "☀️" : "🌙"}</span>;
};

export default ThemeToggle;
