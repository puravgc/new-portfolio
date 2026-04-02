import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import BlurryBlobs from "./ui/BlurryBlobs";

const Projects = () => {
  const { isDark } = useDarkMode();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack online shopping experience with payment integration",
      tech: "React, Node.js, MongoDB",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      tech: "Next.js, Firebase, Tailwind",
    },
    {
      title: "Portfolio Website",
      description: "Modern and responsive portfolio with smooth animations",
      tech: "React, Framer Motion, CSS",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with interactive maps",
      tech: "React, API Integration, Charts",
    },
  ];

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center px-8 overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <BlurryBlobs />
      <div className="max-w-5xl w-full py-16 animate-fade-up relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h1
            className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500"
            style={{ color: isDark ? "#f9fafb" : "#111827" }}
          >
            My Projects
          </h1>
          <p
            className="text-lg md:text-xl font-light transition-colors duration-500"
            style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
          >
            A collection of work I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border transition-all duration-500 space-y-4 backdrop-blur-md"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%), rgba(30, 30, 30, 0.4)"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.4)",
                boxShadow: isDark
                  ? "0 4px 24px 0 rgba(0, 0, 0, 0.37)"
                  : "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(0, 0, 0, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                className="text-2xl font-semibold transition-colors duration-500"
                style={{ color: isDark ? "#f9fafb" : "#111827" }}
              >
                {project.title}
              </h3>
              <p
                className="leading-relaxed transition-colors duration-500"
                style={{ color: isDark ? "#9ca3af" : "#4b5563" }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.split(", ").map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors duration-500"
                    style={{
                      background: isDark
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.03)",
                      color: isDark ? "#9ca3af" : "#4b5563",
                      border: `1px solid ${
                        isDark
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(0, 0, 0, 0.05)"
                      }`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
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

export default Projects;
