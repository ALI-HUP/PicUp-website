import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  styleType: "white" | "blue";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, styleType, type, className, disabled }) => {
  const baseStyles = "py-3 px-7 font-medium";
  const uploadStyles = "bg-slate-200 text-black hover:bg-slate-300 border rounded-xl border-black";
  const downloadStyles = "bg-blue-600 text-white hover:bg-blue-700";

  const buttonStyles = styleType === "white" ? uploadStyles : downloadStyles;

  return (
    <button
      className={`${baseStyles} ${buttonStyles} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
