interface ThemeToggleProps {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
  classes: string;
}

const ThemeToggle = ({
  darkTheme,
  setDarkTheme,
  classes,
}: ThemeToggleProps) => {
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <span className={"select-none " + classes} onClick={handleMode}>
      Toggle Theme {darkTheme ? "☀️" : "🌙"}
    </span>
  );
};

export default ThemeToggle;
