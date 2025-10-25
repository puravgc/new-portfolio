import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center px-8 bg-gray-50">
      <div className="max-w-4xl text-center space-y-8 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight">
          Purav G.C
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
          Fullstack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
          Currently working as a Frontend Developer, crafting seamless digital
          experiences with modern technologies and clean, efficient code.
        </p>

        <div className="flex gap-6 justify-center mt-8">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-md font-medium text-lg hover:bg-gray-800 transition-all duration-300 tracking-wide">
            VIEW WORK
          </button>
          <button className="px-8 py-3 bg-white text-gray-900 rounded-md font-medium text-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 tracking-wide">
            CONTACT ME
          </button>
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

export default Home;
