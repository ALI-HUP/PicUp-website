import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  styleType: 'upload' | 'download';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, styleType }) => {
  const baseStyles = "py-3 px-6";
  const uploadStyles = "bg-gray-200 text-black hover:bg-gray-300 border border-black";
  const downloadStyles = "bg-blue-600 text-white hover:bg-blue-700";

  const buttonStyles = styleType === 'upload' ? uploadStyles : downloadStyles;

  return (
    <button
      className={`${baseStyles} ${buttonStyles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
