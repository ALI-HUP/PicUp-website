import React from "react";
import Image, { StaticImageData } from "next/image";
import WhiteFrame from "@/components/WhiteFrame";

interface ImageGridProps {
  images: (string | StaticImageData)[];
  withIconsAndButtons?: boolean;
  downloadLinks: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, withIconsAndButtons = true, downloadLinks }) => {
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
            <WhiteFrame downloadLink={downloadLinks[index]} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
