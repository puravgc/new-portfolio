import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const AboutMe = () => {
  const { isDark } = useDarkMode();

  const textColor = isDark ? "#f9fafb" : "#111827";
  const subTextColor = isDark ? "#9ca3af" : "#4b5563";
  const mutedTextColor = isDark ? "#6b7280" : "#9ca3af";

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-8 sm:px-16 overflow-y-auto pt-16 pb-16">
      <div className="max-w-4xl text-center space-y-8 animate-fade-up">
        <h1
          className="text-5xl md:text-7xl font-semibold tracking-tight transition-colors duration-500"
          style={{ color: textColor }}
        >
          About Me
        </h1>
        <div
          className="space-y-6 text-lg md:text-xl leading-relaxed font-light transition-colors duration-500"
          style={{ color: subTextColor }}
        >
          <p>
            I'm a passionate fullstack developer with a keen eye for design and
            a love for creating intuitive user experiences. With expertise in
            modern web technologies, I transform ideas into functional and
            beautiful applications.
          </p>
          <p>
            My journey in development started with curiosity and has evolved
            into a commitment to crafting elegant solutions to complex problems.
            I believe in writing clean, maintainable code and staying updated
            with the latest industry trends.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <h3
                className="text-3xl font-semibold transition-colors duration-500"
                style={{ color: textColor }}
              >
                {stat.value}
              </h3>
              <p
                className="text-sm uppercase tracking-wide transition-colors duration-500"
                style={{ color: mutedTextColor }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
