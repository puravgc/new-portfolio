import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import { Icon } from "@iconify/react";
const Navigation = ({ swiperRef }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (!showMenu) {
      setMenuVisible(true);
      setShowMenu(true);
    } else {
      setShowMenu(false);
      setTimeout(() => setMenuVisible(false), 400);
    }
  };

  const menuItems = [
    { id: 1, label: "About", icon: "mdi:account" },
    { id: 0, label: "Home", icon: "mdi:home" }, // Slide 0
    // Slide 1
    { id: 2, label: "Projects", icon: "mdi:briefcase" }, // Slide 2
    { id: 3, label: "Contact", icon: "mdi:email" }, // Slide 3
  ];

  const handleClick = (slideIndex) => {
    if (swiperRef?.current) {
      swiperRef.current.slideTo(slideIndex);
      toggleMenu(); // Close menu after navigation
    }
  };

  return (
    <div className="absolute top-1/2 left-8 z-50 transform -translate-y-1/2">
      <div className="relative flex flex-col items-center">
        {/* Top Menu Items */}
        {menuVisible && (
          <div className="absolute bottom-full mb-4 flex flex-col-reverse gap-3">
            {menuItems.slice(0, 2).map((item, index) => (
              <Tooltip key={item.id} title={item.label} placement="right" arrow>
                <div
                  className="glass-card-ios w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => handleClick(item.id)}
                  style={{
                    animation: `${
                      showMenu ? "slideDown" : "fadeSlideUp"
                    } 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.1}s both`,
                  }}
                >
                  <Icon
                    icon={item.icon}
                    style={{ width: 24, height: 24, color: "#f9fafb" }}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        )}

        {/* Center Button */}
        <button
          onClick={toggleMenu}
          className="glass-card-ios w-12 h-12 rounded-full flex items-center justify-center relative transition-all duration-300"
        >
          <div className="absolute w-6 h-6 flex flex-col justify-between items-center">
            <span
              className={`block w-full h-1 rounded transition-all duration-500 ${
                showMenu
                  ? "rotate-45 translate-y-2.5"
                  : "rotate-0 translate-y-0"
              }`}
              style={{ background: "#f9fafb" }}
            ></span>
            <span
              className={`block w-full h-1 rounded transition-all duration-500 ${
                showMenu ? "opacity-0" : "opacity-100"
              }`}
              style={{ background: "#f9fafb" }}
            ></span>
            <span
              className={`block w-full h-1 rounded transition-all duration-500 ${
                showMenu
                  ? "-rotate-45 -translate-y-2.5"
                  : "rotate-0 translate-y-0"
              }`}
              style={{ background: "#f9fafb" }}
            ></span>
          </div>
        </button>

        {/* Bottom Menu Items */}
        {menuVisible && (
          <div className="absolute top-full mt-4 flex flex-col gap-3">
            {menuItems.slice(2, 4).map((item, index) => (
              <Tooltip key={item.id} title={item.label} placement="right" arrow>
                <div
                  className="glass-card-ios w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition-all duration-300"
                  onClick={() => handleClick(item.id)}
                  style={{
                    animation: `${
                      showMenu ? "slideUp" : "fadeSlideDown"
                    } 0.4s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.1}s both`,
                  }}
                >
                  <Icon
                    icon={item.icon}
                    style={{
                      width: 24,
                      height: 24,
                      color: "#f9fafb",
                    }}
                  />
                </div>
              </Tooltip>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .glass-card-ios {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }

        @keyframes fadeSlideDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  );
};

export default Navigation;
