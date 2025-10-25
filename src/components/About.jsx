import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 bg-gray-50">
      <div className="max-w-4xl text-center space-y-8 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">
          About Me
        </h1>
        <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
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
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-900">3+</h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Years Experience
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-900">20+</h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Projects Completed
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-900">15+</h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Technologies
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold text-gray-900">100%</h3>
            <p className="text-sm text-gray-600 uppercase tracking-wide">
              Client Satisfaction
            </p>
          </div>
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

export default About;