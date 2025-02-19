"use client";

import { useParams } from "next/navigation";
import { useImageStore } from "@/store/imageStore";
import PhotoDisplay from "@/components/PhotoDisplay";

// Hardcoded images list (same as in Home)
const hardcodedImages = [
  { id: 101, src: "/pics/IMG_20220307_152910_643.jpg" },
  { id: 102, src: "/pics/wp7864479.png" },
  { id: 103, src: "/pics/wp7937871.jpg" },
  { id: 104, src: "/pics/IMG_20220307_152910_643.jpg" },
];

const PhotoPage = () => {
  const { id } = useParams();
  const images = useImageStore((state) => state.images);
  
  // First, check in Zustand (uploaded images)
  let image = images.find((img) => img.id === Number(id));

  // If not found, check hardcoded images
  if (!image) {
    image = hardcodedImages.find((img) => img.id === Number(id));
  }

  if (!image) return <p className="text-center text-xl text-white">Image not found</p>;

  return <PhotoDisplay src={image.src} />;
};

export default PhotoPage;
