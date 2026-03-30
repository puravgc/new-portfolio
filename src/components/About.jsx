import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDarkMode } from "../context/DarkModeContext";

import AboutMe from "./about/AboutMe";
import Education from "./about/Education";
import Experience from "./about/Experience";

const About = () => {
  const { isDark } = useDarkMode();

  const textColor = isDark ? "#f9fafb" : "#111827";
  const subTextColor = isDark ? "#9ca3af" : "#4b5563";

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      <Swiper
        modules={[Pagination, Keyboard]}
        pagination={{ clickable: true }}
        navigation={false}
        keyboard={true}
        className="h-full w-full about-swiper"
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Experience />
        </SwiperSlide>
        <SwiperSlide>
          <Education />
        </SwiperSlide>
        <SwiperSlide>
          <AboutMe />
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .about-swiper :global(.swiper-pagination-bullet) {
          background: ${subTextColor};
          opacity: 0.5;
        }

        .about-swiper :global(.swiper-pagination-bullet-active) {
          background: ${textColor} !important;
          opacity: 1;
          transform: scale(1.2);
        }

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

        :global(.animate-fade-up) {
          animation: fade-up 1s ease-out 0.2s both;
        }
      `}</style>
    </div>
  );
};

export default About;
