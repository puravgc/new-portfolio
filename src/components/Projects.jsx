import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import DarkVeil from "./ui/DarkVeil";

const Projects = () => {
  const { isDark } = useDarkMode();

  const projects = [
    {
      title: "Eat More",
      description:
        "Food delivery app with JWT auth, eSewa payments, and real-time order tracking via Socket.IO.",
      tech: "React, Node.js, MongoDB, Socket.IO",
      link: "https://eat-more-delta.vercel.app/",
    },
    {
      title: "Social Media App",
      description:
        "Instagram clone with authentication, posts, likes, comments, and follow system.",
      tech: "React, Express, MongoDB",
      link: "https://instagram-frontend-nu.vercel.app/",
    },
    {
      title: "Netflix Clone",
      description:
        "Streaming UI to browse and search movies with user authentication.",
      tech: "React, API Integration, Tailwind",
      link: "https://netflixclone-rose.vercel.app/",
    },
    {
      title: "Disabled Women Empowerment Committee Project",
      description:
        "Secure admin system with full CRUD access for content management.",
      tech: "Node.js, Express, MongoDB",
      link: "https://www.dwec.org.np/",
    },
  ];

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 overflow-hidden transition-colors duration-500 bg-[#111111]">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
      <div className="max-w-5xl w-full py-16 animate-fade-up relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500 text-[#f9fafb]">
            My Projects
          </h1>
          <p className="text-lg md:text-xl font-light transition-colors duration-500 text-[#9ca3af]">
            A collection of work I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border transition-all duration-500 space-y-5 backdrop-blur-md flex flex-col group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%), rgba(30, 30, 30, 0.4)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.37)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-semibold transition-colors duration-500 text-[#f9fafb]">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap text-xs font-medium tracking-widest text-[#9ca3af] hover:text-[#f9fafb] transition-colors duration-300 flex items-center gap-1 group/link"
                >
                  VIEW PROJECT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
              <p className="leading-relaxed transition-colors duration-500 text-[#9ca3af] flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.split(", ").map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors duration-500 bg-[rgba(255,255,255,0.05)] text-[#9ca3af] border border-[rgba(255,255,255,0.1)]"
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
