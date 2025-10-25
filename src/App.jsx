import React, { useState, Suspense, lazy, useRef } from "react";
import Navigation from "./components/Navigation";
import VerticalSwiper from "./components/ui/VerticalSwiper";

const Landing = lazy(() => import("./components/loader/Landing"));
const Loader = lazy(() => import("./components/loader/Loader"));

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const swiperRef = useRef(null); // Swiper instance reference

  const handleLandingComplete = () => setShowLanding(false);

  return (
    <div className="h-screen w-full relative bg-gray-200">
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
}

export default App;
