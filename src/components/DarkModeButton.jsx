import React from "react";
import { Icon } from "@iconify/react";
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeButton = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <button
      onClick={toggleDark}
      aria-label="Toggle dark mode"
      className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(0,0,0,0.1)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      }}
    >
      <Icon
        icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"}
        style={{
          width: 22,
          height: 22,
          color: isDark ? "#fbbf24" : "#374151",
          transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      />
    </button>
  );
};

export default DarkModeButton;
