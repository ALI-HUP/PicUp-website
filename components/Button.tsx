"use client";

import React from "react";
import { signOut } from "next-auth/react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  styleType: "white" | "blue" | "red";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  actionType?: "default" | "logout";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  styleType,
  type = "button",
  className = "",
  disabled = false,
  actionType = "default",
}) => {
  const baseStyles = "py-3 px-7 font-medium";
  const whiteStyle = "bg-slate-200 hover:bg-slate-300 border rounded-xl border-black";
  const blueStyle = "bg-blue-600 text-white hover:bg-blue-700";
  const redStyle = "bg-red-500 text-white hover:bg-red-600";

  const buttonStyles =
    styleType === "white" ? whiteStyle :
    styleType === "blue" ? blueStyle :
    redStyle;

  const handleClick = () => {
    if (disabled) return;

    if (actionType === "logout") {
      signOut({ callbackUrl: "/" });
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${buttonStyles} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
