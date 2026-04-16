import { useContext } from "react";
import FormContext from "../context/FormContext";

function ThemeButton() {
  const { toggleTheme, theme } = useContext(FormContext);

  return (
    <button onClick={toggleTheme} className="theme-btn">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeButton;