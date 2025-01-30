"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";
import { StaticImageData } from "next/image";

const YourPhotos = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | StaticImageData)[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  const downloadLinks = uploadedImages.map((_, index) => `https://your-website-link.com/${index + 1}`);

  return (
    <div className="mb-40">
      <Header />

      <div className="w-[70%] m-auto mt-10 rounded-full bg-slate-400">
        <div className="flex justify-center items-center text-center p-3 text-2xl font-bold">
          <h1 className="w-[50%]">Here are your photos</h1>
          <h1 className="w-[50%]">Photos: {uploadedImages.length}</h1>
        </div>
      </div>

      <ImageGrid images={uploadedImages as (string | StaticImageData)[]} downloadLinks={downloadLinks} />
    </div>
  );
};

export default YourPhotos;
