import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import BlurryBlobs from "./ui/BlurryBlobs";

const Home = () => {
  const { isDark } = useDarkMode();

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center px-8 transition-colors duration-500 overflow-hidden"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <BlurryBlobs />
      <div className="max-w-4xl text-center space-y-8 animate-fade-up relative z-10">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500"
          style={{ color: isDark ? "#f9fafb" : "#111827" }}
        >
          Purav G.C
        </h1>
        <h2
          className="text-2xl md:text-3xl font-light transition-colors duration-500"
          style={{ color: isDark ? "#9ca3af" : "#374151" }}
        >
          Fullstack Developer
        </h2>
        <p
          className="text-lg md:text-xl leading-relaxed font-light transition-colors duration-500"
          style={{ color: isDark ? "#6b7280" : "#4b5563" }}
        >
          Currently working as a Frontend Developer, crafting seamless digital
          experiences with modern technologies and clean, efficient code.
        </p>

        <div className="flex gap-6 justify-center mt-8">
          <button
            className="cursor-pointer px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 tracking-wide"
            style={{
              background: isDark ? "#f9fafb" : "#111827",
              color: isDark ? "#111827" : "#f9fafb",
            }}
          >
            VIEW WORK
          </button>
          <button
            className="cursor-pointer px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 tracking-wide"
            style={{
              background: "transparent",
              color: isDark ? "#f9fafb" : "#111827",
              border: `2px solid ${isDark ? "#f9fafb" : "#111827"}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isDark ? "#f9fafb" : "#111827";
              e.currentTarget.style.color = isDark ? "#111827" : "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = isDark ? "#f9fafb" : "#111827";
            }}
          >
            CONTACT ME
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default Home;
