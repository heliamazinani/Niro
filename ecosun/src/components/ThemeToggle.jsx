import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      style={{
        position: "relative",
        width: "50px",
        height: "26px",
        borderRadius: "30px",
        background: theme === "light" ? "#f6ad55" : "#2d3748",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: theme === "light" ? "3px" : "calc(100% - 23px)",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "white",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <span style={{ fontSize: "16px" }}>{theme === "light" ? "" : ""}</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
