"use client";

import React, { useEffect, useState } from "react";
import WhiteFrame from "@/components/WhiteFrame";

interface PhotoInfoBoxProps {
  src: string;
}

const PhotoInfoBox: React.FC<PhotoInfoBoxProps> = ({ src }) => {
  const [description, setDescription] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("User Name");

  useEffect(() => {
    const storedDescriptions = JSON.parse(localStorage.getItem("imageDescriptions") || "{}");
    setDescription(storedDescriptions[src] || "No description available.");

    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [src]);

  return (
    <div className="w-[30%] bg-white p-5 text-black rounded-xl shadow-xl flex flex-col gap-10 justify-center">
      <h2 className="text-2xl font-bold">{userName}</h2>
      <p className="text-lg break-words whitespace-normal">Description: {description} </p>
      
      <WhiteFrame imageSrc={src} />
    </div>
  );
};

export default PhotoInfoBox;
