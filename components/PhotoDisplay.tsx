"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import WhiteFrame from "@/components/WhiteFrame";

interface PhotoDisplayProps {
  src: string;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ src }) => {
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
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-grow items-center overflow-hidden">
        <div className="w-2/3 flex justify-center">
          <Image
            src={src}
            alt="Selected Photo"
            className="max-w-full max-h-[82vh] object-contain"
            width={1000}
            height={1000}
            unoptimized
          />
        </div>

        <div className="w-[30%] bg-white p-5 text-black rounded-xl shadow-xl flex flex-col gap-10 justify-center">
          <h2 className="text-2xl font-bold">{userName}</h2>
          <p className="text-xl ">Description: {description}</p>   
          <div>
            <WhiteFrame imageSrc={src} />  
          </div>  
        </div>
      </div>
    </div>
  );
};

export default PhotoDisplay;
