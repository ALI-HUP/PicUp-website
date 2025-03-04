import React, { useEffect } from "react";
import Button from "@/components/Button";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "warning" | "info"; // Different types of messages
  onClose?: () => void; // Optional close function
  autoClose?: boolean; // Should auto-close?
}

const NotificationSystem: React.FC<NotificationProps> = ({ message, type = "info", onClose, autoClose = true }) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  // Define different colors based on notification type
  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "warning":
        return "bg-yellow-500 text-black";
      default:
        return "bg-blue-500 text-white";
    }
  };

  return (
    <div className={`fixed top-10 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg ${getBgColor()} text-center`}>
      <h2 className="text-lg font-bold">{message}</h2>
      {onClose && (
        <Button label="Close" onClick={onClose} styleType="white" className="mt-2" />
      )}
    </div>
  );
};

export default NotificationSystem;
