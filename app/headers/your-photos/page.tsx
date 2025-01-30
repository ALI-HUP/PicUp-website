"use client";

import React, { useEffect, useState } from "react";
import Header from '@/components/Header';
import Image from "next/image";
import IconsAndButton from "@/components/IconsAndButton";

const YourPhotos = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | ArrayBuffer | null)[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  return (
    <div className="mb-40">
      <Header />
      
      <div className="w-[70%] m-auto mt-10 rounded-full bg-slate-400">
        <div className="flex justify-center items-center text-center p-3 text-2xl font-bold">
          <h1 className="w-[50%]">Here are your photos</h1>
          <h1 className="w-[50%]">Photos: {uploadedImages.length}</h1>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {uploadedImages.map((image, index) => (
          <div key={index}>
            <Image src={image as string} alt={`photo ${index}`} width={500} height={500} />
            <IconsAndButton downloadLink={`https://your-website-link.com/${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPhotos;
