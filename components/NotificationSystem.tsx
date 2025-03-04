import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose?: () => void;
}

const NotificationSystem: React.FC<NotificationProps> = ({ message, type = "info", onClose }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (type === "success") {
      router.push("/header/profile");
    }
    onClose?.();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-slate-900 bg-opacity-55">
      <div className="p-5 rounded-lg shadow-lg bg-white text-black text-center">
        <h2 className="text-xl font-bold p-2">{message}</h2>
        {onClose && (
          <Button
            label={type === "success" ? "Go to Profile" : "Close"}
            onClick={handleButtonClick}
            styleType="blue"
            className="mt-5"
          />
        )}
      </div>
    </div>
  );
};

export default NotificationSystem;
