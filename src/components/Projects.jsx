import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Projects = () => {
  const { isDark } = useDarkMode();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online shopping experience with payment integration",
      tech: "React, Node.js, MongoDB",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
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
      className="relative w-full h-screen flex flex-col items-center justify-center px-8 overflow-y-auto transition-colors duration-500"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <div className="max-w-5xl w-full py-16 animate-fade-up">
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
              className="p-8 rounded-lg border-2 transition-all duration-300 space-y-4"
              style={{
                background: isDark ? "#1a1a1a" : "#ffffff",
                borderColor: isDark ? "#2d2d2d" : "#e5e7eb",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? "#f9fafb" : "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? "#2d2d2d" : "#e5e7eb";
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
              <p
                className="text-sm uppercase tracking-wide transition-colors duration-500"
                style={{ color: isDark ? "#6b7280" : "#9ca3af" }}
              >
                {project.tech}
              </p>
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