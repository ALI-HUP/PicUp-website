import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteFrame from "@/components/WhiteFrame";

interface ImageGridProps {
  images: { id: number; src: string }[];
  withIconsAndButtons?: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, withIconsAndButtons = true }) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-10">
      {images.map((image) => (
        <div key={image.id} className="sm:w-1/4">
          <Link href={`/photo/${image.id}`} passHref>
            <Image
              src={image.src}
              alt={`Photo ${image.id}`}
              width={500}
              height={500}
              className="object-cover cursor-pointer"
            />
          </Link>
          {withIconsAndButtons && <WhiteFrame imageSrc={image.src} />}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
