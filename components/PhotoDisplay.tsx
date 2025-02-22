"use client";

import React from "react";
import Image from "next/image";
import ImageGrid from "@/components/ImageGrid";

interface PhotoDisplayProps {
  src: string;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ src }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative max-w-[90%] max-h-[90vh]">
        <Image
          src={src}
          alt="Selected Photo"
          width={800}
          height={800}
          className=""
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoDisplay;
