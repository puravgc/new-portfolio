import { Icon } from "@iconify/react";
import { useDarkMode } from "../../context/DarkModeContext";

const directionMap = {
  down: "lucide:chevron-down",
  up: "lucide:chevron-up",
  left: "lucide:chevron-left",
  right: "lucide:chevron-right",
};

const AnimatedArrow = ({ direction = "down", className = "", color }) => {
  const { isDark } = useDarkMode();
  const arrowColor = color || (isDark ? "#f3f4f6" : "#374151");

  return (
    <div
      className={`relative w-12 h-12 flex items-center justify-center ${className}`}
    >
      <Icon
        icon={directionMap[direction]}
        className={`absolute text-3xl arrow1 arrow-${direction}`}
        style={{ color: arrowColor }}
      />
      <Icon
        icon={directionMap[direction]}
        className={`absolute text-3xl arrow2 arrow-${direction}`}
        style={{ color: arrowColor }}
      />
    </div>
  );
};

export default AnimatedArrow;
