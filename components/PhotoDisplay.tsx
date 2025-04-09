"use client";

import React from "react";
import Image from "next/image";
import PhotoInfoBox from "@/components/PhotoInfoBox";

interface PhotoDisplayProps {
  src: string;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ src }) => {
  return (
    <div className="h-screen flex flex-col">

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

        <PhotoInfoBox src={src} />
      </div>
    </div>
  );
};

export default PhotoDisplay;
