import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const Landing = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const name = "Purav G.C";
  const title = "FULLSTACK DEVELOPER";
  const { isDark } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // trigger fade out
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800); // match animation duration
    }, 3500); // show landing for 3.5s

    return () => clearTimeout(timer);
  }, [onComplete]);

  const animateWords = (text, delayStart = 0, delayStep = 0.2) =>
    text.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span
          className={`inline-block ${
            fadeOut ? "animate-word-down" : "animate-word-up"
          }`}
          style={{
            animationDelay: `${delayStart + index * delayStep}s`,
          }}
        >
          {word}
        </span>{" "}
        {/* Preserve space between words */}
      </React.Fragment>
    ));

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;700&family=Inter:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <div className="text-center overflow-hidden">
        <h1
          className="text-8xl md:text-9xl font-light text-gray-900 tracking-tight mb-8"
          style={{ color: isDark ? "#f9fafb" : "#111827" }}
        >
          {animateWords(name, 0, 0.2)}
        </h1>
        <p
          className="text-2xl md:text-3xl font-light text-gray-600 tracking-widest"
          style={{ color: isDark ? "#f9fafb" : "#111827" }}
        >
          {animateWords(title, 0.6, 0.2)}
        </p>
      </div>

      <style jsx>{`
        @keyframes word-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes word-down {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px);
          }
        }

        .animate-word-up {
          opacity: 0;
          animation: word-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-word-down {
          opacity: 1;
          animation: word-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;
