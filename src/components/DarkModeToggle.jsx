import { useContext } from "react";
import { Context } from "../context/Context";

function DarkModeToggle() {
  const { dispatch, isDark } = useContext(Context);
  const imgSrc = isDark ? "/icon-sun.svg" : "/icon-moon.svg";
  const handleThemeChange = () => {
    const root = document.getElementById("root");
    root.classList.toggle("dark-mode");
    dispatch({ type: "toggleTheme" });
  };
  return (
    <div className="dark-mode-toggle" onClick={handleThemeChange}>
      <img src={imgSrc} />
    </div>
  );
}

export default DarkModeToggle;
