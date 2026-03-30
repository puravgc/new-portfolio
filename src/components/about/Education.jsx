import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const Education = () => {
  const { isDark } = useDarkMode();

  const textColor = isDark ? "#f9fafb" : "#111827";
  const subTextColor = isDark ? "#9ca3af" : "#4b5563";
  const mutedTextColor = isDark ? "#6b7280" : "#9ca3af";

  const education = [
    {
      degree: "Bachelor in Computer Science and Information Technology",
      school: "Prithvi Narayan Campus",
      period: "Currently Studying (7th Semester)",
      description:
        "Focused on Software Engineering and Artificial Intelligence.",
    },
    {
      degree: "High School",
      school: "Global Collegiate School",
      period: "2018 - 2020",
      description: "Majored in Mathematics and Biology.",
    },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 sm:px-16 overflow-y-auto pt-16 pb-16">
      <div className="max-w-4xl w-full space-y-12 animate-fade-up">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight text-center transition-colors duration-500"
          style={{ color: textColor }}
        >
          Education
        </h1>
        <div className="space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-gray-400 before:to-transparent">
          {education.map((edu, idx) => (
            <div
              key={edu.degree}
              className={`relative md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"} pl-8 md:pl-12`}
            >
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-2 transition-colors duration-500 ${idx % 2 === 0 ? "md:-right-[9px] left-0 md:left-auto" : "-left-[9px]"}`}
                style={{
                  background: isDark ? "#111111" : "#f9fafb",
                  borderColor: subTextColor,
                }}
              />
              <div className="space-y-2">
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: mutedTextColor }}
                >
                  {edu.period}
                </span>
                <h3
                  className="text-2xl font-semibold"
                  style={{ color: textColor }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="text-lg font-medium"
                  style={{ color: subTextColor }}
                >
                  {edu.school}
                </p>
                <p
                  className="font-light leading-relaxed"
                  style={{ color: mutedTextColor }}
                >
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
