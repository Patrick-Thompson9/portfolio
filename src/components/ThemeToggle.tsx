import ShinyButton from "./ShinyButton";

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
  const emoji = darkTheme ? "🌙" : "☀️";
  return (
    <span onClick={handleMode}>
      <ShinyButton buttonText={`Toggle Theme ${emoji}`} />
    </span>
  );
};

export default ThemeToggle;
