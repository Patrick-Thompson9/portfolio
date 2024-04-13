interface ThemeToggleProps {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeToggle = ({ darkTheme, setDarkTheme }: ThemeToggleProps) => {
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <span className="select-none" onClick={handleMode}>
      Toggle Theme {darkTheme ? "☀️" : "🌙"}
    </span>
  );
};

export default ThemeToggle;
