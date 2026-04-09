import React, { useState, Suspense, lazy, useRef } from "react";
import Navigation from "./Navigation";
import VerticalSwiper from "./ui/VerticalSwiper";
import { useDarkMode } from "../context/DarkModeContext";

const Landing = lazy(() => import("./loader/Landing"));
const Loader = lazy(() => import("./loader/Loader"));

const AppLayout = () => {
  const [showLanding, setShowLanding] = useState(true);
  const swiperRef = useRef(null);
  const { isDark } = useDarkMode();

  const handleLandingComplete = () => setShowLanding(false);

  return (
    <div className="h-screen w-full relative transition-colors duration-500 bg-[#0f0f0f]">
      <Navigation swiperRef={swiperRef} />
      <Suspense fallback={<Loader />}>
        {showLanding ? (
          <Landing onComplete={handleLandingComplete} />
        ) : (
          <VerticalSwiper swiperRef={swiperRef} />
        )}
      </Suspense>
    </div>
  );
};

export default AppLayout;
