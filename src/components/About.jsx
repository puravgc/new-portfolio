import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useDarkMode } from "../context/DarkModeContext";

import AboutMe from "./about/AboutMe";
import Education from "./about/Education";
import Experience from "./about/Experience";
import AnimatedArrow from "./ui/AnimatedArrow";

const About = () => {
  const { isDark } = useDarkMode();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const textColor = isDark ? "#f9fafb" : "#111827";
  const subTextColor = isDark ? "#9ca3af" : "#4b5563";

  return (
    <div
      className="relative w-full h-screen overflow-hidden transition-colors duration-500"
      style={{ background: isDark ? "#111111" : "#f9fafb" }}
    >
      {/* Left Arrow */}
      {activeIndex > 0 && (
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-4 md:left-18"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <AnimatedArrow direction="left" />
        </div>
      )}

      {/* Right Arrow */}
      {activeIndex < 2 && (
        <div
          className="absolute right-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-4 md:right-18"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <AnimatedArrow direction="right" />
        </div>
      )}

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
