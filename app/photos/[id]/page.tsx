// app/photos/[id]/page.tsx
import React from "react";
import { notFound } from "next/navigation";

interface PhotoPageProps {
  params: {
    id: string;
  };
  searchParams: {
    src: string; // The image source passed as a query parameter
  };
}

const PhotoPage = async ({ params, searchParams }: PhotoPageProps) => {
  const { id } = params;
  const { src } = searchParams;

  if (!src) {
    return notFound(); // Show a 404 page if the image source is missing
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="max-w-4xl w-full">
        <img // Use <img> for all photos
          src={src}
          alt={`Photo ${id}`}
          className="object-cover rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PhotoPage;