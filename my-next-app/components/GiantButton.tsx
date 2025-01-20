import React from "react";

interface giantButtonProps {
  title: string;
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

const giantButtonStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  danger: "bg-red-500 text-white",
};

const giantButtonSizes = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const GiantButton: React.FC<giantButtonProps> = ({
  title,
  color = "primary",
  size = "medium",
  onClick,
}) => {
  return (
    <button
      className={`rounded-md ${giantButtonStyles[color]} ${giantButtonSizes[size]} hover:opacity-80 transition-all`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default GiantButton;
