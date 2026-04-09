import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import DarkVeil from "./ui/DarkVeil";

const Home = ({ swiperRef }) => {
  const { isDark } = useDarkMode();

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 transition-colors duration-500 overflow-hidden bg-[#111111]">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />{" "}
      <div className="max-w-4xl text-center space-y-8 animate-fade-up relative z-10">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500 text-[#f9fafb]">
          Purav G.C
        </h1>
        <h2 className="text-2xl md:text-3xl font-light transition-colors duration-500 text-[#9ca3af]">
          Fullstack Developer
        </h2>
        <p className="text-lg md:text-xl leading-relaxed font-light transition-colors duration-500 text-[#6b7280]">
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
            onClick={() => swiperRef.current.slideTo(2)}
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
            onClick={() => swiperRef.current.slideTo(3)}
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
