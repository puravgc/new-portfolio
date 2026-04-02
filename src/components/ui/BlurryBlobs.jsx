import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const BlurryBlobs = () => {
  const { isDark } = useDarkMode();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1: Top Left - Indigo */}
      <div
        className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full filter blur-[100px] opacity-20 md:opacity-30 animate-blob-slow"
        style={{
          background: isDark ? "#4f46e5" : "#6366f1",
          top: "-5%",
          left: "-5%",
        }}
      />
      {/* Blob 2: Top Right - Pink/Purple */}
      <div
        className="absolute w-[30vw] h-[30vw] max-w-[450px] max-h-[450px] rounded-full filter blur-[80px] opacity-15 md:opacity-25 animate-blob-medium"
        style={{
          background: isDark ? "#c026d3" : "#ec4899",
          top: "10%",
          right: "0%",
        }}
      />
      {/* Blob 3: Bottom Left - Cyan/Blue */}
      <div
        className="absolute w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full filter blur-[90px] opacity-20 md:opacity-30 animate-blob-fast"
        style={{
          background: isDark ? "#0891b2" : "#22d3ee",
          bottom: "10%",
          left: "5%",
        }}
      />
      {/* Blob 4: Bottom Right - Indigo/Blue */}
      <div
        className="absolute w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full filter blur-[110px] opacity-15 md:opacity-25 animate-blob-very-slow"
        style={{
          background: isDark ? "#312e81" : "#1e40af",
          bottom: "-10%",
          right: "-5%",
        }}
      />

      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(40px, -60px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes drift-alt {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(-50px, 40px) rotate(120deg);
          }
          66% {
            transform: translate(40px, -20px) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(360deg);
          }
        }
        .animate-blob-slow {
          animation: drift 15s infinite ease-in-out;
        }
        .animate-blob-medium {
          animation: drift-alt 12s infinite linear;
        }
        .animate-blob-fast {
          animation: drift 8s infinite ease-in-out;
        }
        .animate-blob-very-slow {
          animation: drift-alt 20s infinite linear reverse;
        }
      `}</style>
    </div>
  );
};

export default BlurryBlobs;
