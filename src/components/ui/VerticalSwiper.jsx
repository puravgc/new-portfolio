import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import cube effect CSS
import { Pagination, Keyboard, Mousewheel, EffectFade } from "swiper/modules";

import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

const VerticalSwiper = ({ swiperRef }) => {
  return (
    <Swiper
      effect="fade"
      speed={500}
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: false,
      }}
      keyboard={{ enabled: true }}
      pagination={false}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[Pagination, Keyboard, Mousewheel, EffectFade]}
      className="h-screen w-full custom-swiper"
      tabIndex={0}
      grabCursor={true}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      style={{
        "--swiper-pagination-bullet-size": "12px",
        "--swiper-pagination-bullet-horizontal-gap": "12px",
        "--swiper-pagination-bullet-vertical-gap": "12px",
        "--swiper-pagination-bullet-inactive-color": "#8C8C8C",
        "--swiper-pagination-color": "#000000",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}
    >
      <SwiperSlide>
        <Home swiperRef={swiperRef} />
      </SwiperSlide>
      <SwiperSlide>
        <About swiperRef={swiperRef} />
      </SwiperSlide>
      <SwiperSlide>
        <Projects />
      </SwiperSlide>
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default VerticalSwiper;
