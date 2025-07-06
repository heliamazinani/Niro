import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // default to dark

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    const head = document.head;

    const removeOldLinks = () => {
      const existing = document.querySelectorAll("link[data-theme]");
      existing.forEach((el) => el.parentNode.removeChild(el));
    };

    const loadStyles = () => {
      const cssFiles = ["plugins.css", "style.css"];
      cssFiles.forEach((file) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `/themes/${theme}/${file}`;
        link.setAttribute("data-theme", theme);
        head.appendChild(link);
      });
    };

    removeOldLinks();
    loadStyles();
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
