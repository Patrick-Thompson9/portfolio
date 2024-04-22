import ShinyButton from "./ShinyButton";

interface ThemeToggleProps {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeToggle = ({ darkTheme, setDarkTheme }: ThemeToggleProps) => {
  const handleMode = () => {
    setDarkTheme(!darkTheme);
  };
  const emoji = darkTheme ? "🌙" : "☀️";
  return (
    <span onClick={handleMode}>
      <ShinyButton buttonText={`Theme ${emoji}`} />
    </span>
  );
};

export default ThemeToggle;
