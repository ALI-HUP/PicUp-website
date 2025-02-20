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

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-10">
      {images.map((image) => (
        <div key={image.id} className="sm:w-1/4">
          <Link
            href={`/photo?selected=true`}
            passHref
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt="Photo"
              width={500}
              height={500}
              className="object-cover cursor-pointer"
              unoptimized
            />
          </Link>
          {withIconsAndButtons && <WhiteFrame imageSrc={image.src} />}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
