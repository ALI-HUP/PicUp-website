"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteFrame from "@/components/WhiteFrame";
import { useImageStore } from "@/store/imageStore";

interface ImageGridProps {
  images: { id: string; src: string }[];
  withIconsAndButtons?: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, withIconsAndButtons = true }) => {
  const setSelectedImage = useImageStore((state) => state.setSelectedImage);
  const columns = 3;
  const columnImages: { id: string; src: string }[][] = Array.from({ length: columns }, () => []);

  images.forEach((image, index) => {
    columnImages[index % columns].push(image);
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 justify-center">
      {columnImages.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-5 items-center">
          {col.map((image) => (
            <div key={image.id} className="relative w-full max-w-[450px]">
              <Link href={`/photo?selected=true`} passHref onClick={() => setSelectedImage(image.src)}>
                <Image
                  src={image.src}
                  alt="Photo"
                  width={500}
                  height={500}
                  className="object-cover cursor-pointer w-full h-auto"
                  unoptimized
                />
              </Link>
              {withIconsAndButtons && <WhiteFrame imageSrc={image.src} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
