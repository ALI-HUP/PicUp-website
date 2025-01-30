import React from "react";
import Image, { StaticImageData } from "next/image";
import IconsAndButton from "@/components/IconsAndButton"; // Import the IconsAndButton component

interface ImageGridProps {
  images: (string | StaticImageData)[]; // Accept both string URLs and StaticImageData
  withIconsAndButtons?: boolean; // Optional prop to control whether icons and buttons are shown
  downloadLinks: string[]; // Array of download links, one for each image
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
            <IconsAndButton downloadLink={downloadLinks[index]} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
