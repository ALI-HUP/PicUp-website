import React from "react";
import Image, { StaticImageData } from "next/image";
import WhiteFrame from "@/components/WhiteFrame";
import Link from "next/link";

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
          <Link href={`/photos/${index}`} passHref> {/* Dynamic route */}
            <Image
              src={image}
              alt={`photo ${index}`}
              width={500}
              height={500}
              className="object-cover cursor-pointer"
            />
          </Link>
          {withIconsAndButtons && (
            <WhiteFrame imageSrc={image} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;