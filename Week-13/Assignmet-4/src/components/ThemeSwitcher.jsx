import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
const ThemeSwitcher = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeSwitcher;
