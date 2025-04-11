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
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-55">
      {type === "success" && (
        <video
          className="fixed inset-0 w-full h-full top-[68px] object-cover opacity-30 z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/success-paper.mp4" type="video/mp4" />
        </video>
      )}

      <div className="p-5 rounded-lg shadow-lg bg-white text-center relative z-10">
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
