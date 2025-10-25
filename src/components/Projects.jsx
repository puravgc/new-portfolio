import React from "react";

const Projects = () => {
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
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 bg-gray-50 overflow-y-auto">
      <div className="max-w-5xl w-full py-16 animate-fade-up">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            A collection of work I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
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