"use client";

import React, { useEffect, useState } from "react";
import WhiteFrame from "@/components/WhiteFrame";
import Image from "next/image";
import Deletepic from "@/public/svg/delete_2550254.png";

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
    <div className="w-[30%] bg-white p-5 rounded-xl shadow-xl flex flex-col gap-10 justify-center">
      <div className="flex place-content-between">
        <h2 className="text-2xl font-bold">{userName}</h2>
        <button>
          <Image alt="Delete pic" src={Deletepic} className="w-5"/> 
        </button>
      </div>
      <p className="text-lg break-words whitespace-normal">Description: {description} </p>
      
      <WhiteFrame imageSrc={src} />
    </div>
  );
};

export default PhotoInfoBox;
