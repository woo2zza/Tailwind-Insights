import React, { ReactNode } from "react";

// Dialog 컴포넌트의 컨테이너
const MixtureButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 border rounded-[8%] shadow-md bg-white max-w-xs">
      {children}
    </div>
  );
};

// Icon 컴포넌트
MixtureButton.Icon = ({ type }: { type: "simple" | "fancy" }) => {
  return (
    <div className="text-start mb-4">
      {type === "fancy" ? (
        <span className="flex justify-start text-xl">★★★★★</span>
      ) : (
        <span className="text">🔔</span>
      )}
    </div>
  );
};

// Content 컴포넌트
MixtureButton.Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-start">
      <h2 className="text-[13px] font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-[9px] mb-4">{description}</p>
    </div>
  );
};

// ButtonContainer 컴포넌트
MixtureButton.ButtonContainer = ({
  align,
  children,
}: {
  align: "horizontal" | "vertical";
  children: ReactNode;
}) => {
  return (
    <div
      className={`mt-4 flex ${
        align === "vertical" ? "flex-col gap-2" : "gap-4 justify-center"
      }`}
    >
      {children}
    </div>
  );
};

// Button 컴포넌트
MixtureButton.Button = ({
  type,
  onClick,
  children,
}: {
  type: "primary" | "secondary";
  onClick: () => void;
  children: ReactNode;
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold";
  const styles =
    type === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600"
      : "bg-gray-300 text-black hover:bg-gray-400";

  return (
    <button className={`${baseStyle} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default MixtureButton;
