import React, { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeContext = React.createContext({
  isDark: false,
  toggleDark: () => {},
});

function Theme() {
  const { isDark, toggleDark } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("bg-gray-800", isDark);
    document.body.classList.toggle("text-white", isDark);
    document.body.classList.toggle("bg-gray-100", !isDark);
    document.body.classList.toggle("text-gray-800", !isDark);
  }, [isDark]);

  return (
    <button onClick={toggleDark} className="py-2 px-4 rounded">
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = React.useState(() => {
    try {
      const storedIsDark = localStorage.getItem("isDark");
      return storedIsDark === "true";
    } catch (error) {
      console.error(error);
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("isDark", JSON.stringify(isDark));
    } catch (error) {
      console.error(error);
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prevDark) => !prevDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { Theme, ThemeProvider };
