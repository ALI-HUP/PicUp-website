import React from "react";
import Button from "@/components/Button";

interface NotificationModalProps {
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ message, buttonText, onButtonClick }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-55 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] text-center">
        <h2 className="text-2xl font-bold text-black m-5">{message}</h2>
        <Button label={buttonText} onClick={onButtonClick} styleType="blue" />
      </div>
    </div>
  );
};

export default NotificationModal;
