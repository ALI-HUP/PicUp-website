import React from "react";
import Image, { StaticImageData } from "next/image";
import WhiteFrame from "@/components/WhiteFrame";

interface ImageGridProps {
  images: (string | StaticImageData)[];
  downloadLinks: string[];
  withIconsAndButtons?: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, withIconsAndButtons = true }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-10">
      {images.map((image, index) => (
        <div key={index} className="sm:w-1/4">
          <Image
            src={image}
            alt={`photo ${index}`}
            width={500}
            height={500}
            className="object-cover"
          />
          {withIconsAndButtons && (
            <WhiteFrame imageSrc={image} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
