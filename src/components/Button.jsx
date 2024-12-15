import React from "react";

const Button = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} ${className}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
