import React, { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeContext = React.createContext({
  isDark: false,
  toggleDark: () => {},
});

function Theme() {
  const { isDark, toggleDark } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:text-sky-500 hover:border-sky-400 dark:hover:text-sky-400 shadow-sm transition"
    >
      {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
    </button>
  );
}

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = React.useState(() => {
    try {
      const stored = localStorage.getItem("isDark");
      if (stored !== null) return stored === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    try { localStorage.setItem("isDark", String(isDark)); } catch { /* noop */ }
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { Theme, ThemeProvider };
