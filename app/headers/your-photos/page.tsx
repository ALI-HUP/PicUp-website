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
      <h1>Your Photos</h1>
      <ImageGrid images={uploadedImages as (string | StaticImageData)[]} downloadLinks={downloadLinks} />
    </div>
  );
};

export default YourPhotos;
