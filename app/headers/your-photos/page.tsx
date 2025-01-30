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
      
      <div className="flex justify-center items-center text-center p-8 bg-slate-500 text-2xl font-extrabold">
        <h1 className="w-[50%]">Here is your photos</h1>

        <h1 className="w-[50%]">Photos:...</h1>
      </div>
      
      <div className="flex justify-center items-start grid-cols-3 gap-8 max-w-[1400px] m-auto mt-10">
        {uploadedImages.map((image, index) => (
          <div key={index} className="bg-white">
            <Image src={image as string} alt={`photo ${index}`} width={500} height={500} />
            <IconsAndButton downloadLink={`https://your-website-link.com/${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPhotos;
