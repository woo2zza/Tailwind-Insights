import React, { ReactNode } from "react";

// Dialog 컴포넌트의 컨테이너
const MixtureButton = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white max-w-sm">
      {children}
    </div>
  );
};

// Icon 컴포넌트
MixtureButton.Icon = ({ type }: { type: "simple" | "fancy" }) => {
  return (
    <div className="flex justify-center mb-4">
      {type === "fancy" ? (
        <span className="text-4xl">✨</span>
      ) : (
        <span className="text-4xl">🔔</span>
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
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
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
