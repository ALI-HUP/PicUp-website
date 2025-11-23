"use client";

import { useSearchParams } from "next/navigation";
import { useImageStore } from "@/store/imageStore";
import PhotoDisplay from "@/components/PhotoDisplay";

export default function PhotoClient() {
  const searchParams = useSearchParams();
  const selectedImage = useImageStore((state) => state.selectedImage);

  if (!searchParams.get("selected") || !selectedImage) {
    return <p className="text-center text-xl text-white">Image not found</p>;
  }

  return <PhotoDisplay src={selectedImage} />;
}
