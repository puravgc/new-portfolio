import React from "react";

const Button = ({
  text,
  disabled = false,
  type = "primary", // "primary" or "light"
  isLoading = false,
  startAdornment,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium transition-all duration-300 focus:outline-none";

  const typeStyles =
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100";

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${typeStyles} ${disabledStyles} ${className}`}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
      {startAdornment && !isLoading && startAdornment}
      <span>{text}</span>
    </button>
  );
};

export default Button;
