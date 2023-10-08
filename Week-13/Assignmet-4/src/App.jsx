import React, { useState } from "react";
import BookListWithLogging from "./components/BooklistWithLogging";
import ThemeContext from "./components/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div style={{ backgroundColor: theme === "dark" ? "blue" : "yellow" }}>
      <ThemeContext.Provider value={theme}>
        <h1>Book App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <BookListWithLogging />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
