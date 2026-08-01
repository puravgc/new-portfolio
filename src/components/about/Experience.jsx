import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const Experience = () => {
  const { isDark } = useDarkMode();

  const textColor = isDark ? "#f9fafb" : "#111827";
  const subTextColor = isDark ? "#9ca3af" : "#4b5563";
  const mutedTextColor = isDark ? "#6b7280" : "#9ca3af";

  const experiences = [
    {
      role: "Frontend Developer",
      company: "WOW Finstack Nepal",
      period: "Apr 2025 - Apr 2026",
      description:
        "Built and optimized responsive React.js internet banking interfaces, integrating HMAC-based encryption for highly secure data transmission.",
    },
    {
      role: "Backend Developer",
      company: "Disabled Women Empowerment Committee (DWEC)",
      period: "Dec 2024 - Feb 2025",
      description:
        "Developed secure backend systems with role-based admin access, managing efficient CRUD operations while enforcing robust authentication.",
    },
    {
      role: "MERN Stack Developer Intern",
      company: "xDezo Technologies",
      period: "Jan 2025 - Mar 2025",
      description:
        "Built a full-stack MERN perfume e-commerce platform with a responsive storefront, secure admin panel, REST APIs, and comprehensive CRUD operations.",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 sm:px-16 overflow-y-auto pt-8 pb-8">
      <div className="max-w-4xl w-full space-y-6 md:space-y-8 animate-fade-up">
        <h1
          className="text-4xl md:text-6xl font-semibold tracking-tight text-center transition-colors duration-500"
          style={{ color: textColor }}
        >
          Experience
        </h1>
        <div className="space-y-6 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-gray-400 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div
              key={exp.role}
              className={`relative md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"} pl-8 md:pl-12`}
            >
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-2 transition-colors duration-500 ${idx % 2 === 0 ? "md:-right-[9px] left-0 md:left-auto" : "-left-[9px]"}`}
                style={{
                  background: isDark ? "#111111" : "#f9fafb",
                  borderColor: subTextColor,
                }}
              />
              <div className="space-y-1">
                <span
                  className="text-xs md:text-sm font-medium uppercase tracking-wider"
                  style={{ color: mutedTextColor }}
                >
                  {exp.period}
                </span>
                <h3
                  className="text-xl md:text-2xl font-semibold"
                  style={{ color: textColor }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: subTextColor }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-sm md:text-base font-light leading-relaxed"
                  style={{ color: mutedTextColor }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
