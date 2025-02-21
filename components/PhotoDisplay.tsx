"use client";

import React from "react";
import Image from "next/image";
import ImageGrid from "@/components/ImageGrid";

interface PhotoDisplayProps {
  src: string;
}

const PhotoDisplay: React.FC<PhotoDisplayProps> = ({ src }) => {
  return (
    <div className="flex items-center min-h-screen bg-slate-200">
      <div className="relative rounded-xl max-w-[90%] max-h-[90vh]">
        <Image
          src={src}
          alt="Selected Photo"
          width={800}
          height={800}
          className="max-w-full max-h-screen object-contain rounded-md"
          unoptimized
        />
      </div>
    </div>
  );
};

export default PhotoDisplay;
