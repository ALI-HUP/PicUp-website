// app/photos/[id]/page.tsx (App Router)
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PhotoPageProps {
  params: {
    id: string;
  };
}

const PhotoPage = ({ params }: PhotoPageProps) => {
  const { id } = params;

  // Fetch the photo data (replace this with your actual data fetching logic)
  const photos = [
    { src: "/pics/IMG_20220307_152910_643.jpg", description: "Photo 1 Description" },
    { src: "/pics/wp7864479.png", description: "Photo 2 Description" },
    { src: "/pics/wp7937871.jpg", description: "Photo 3 Description" },
  ];

  const photo = photos[Number(id)];

  if (!photo) {
    return notFound(); // Show a 404 page if the photo doesn't exist
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <div className="max-w-4xl w-full">
        <Image
          src={photo.src}
          alt={`Photo ${id}`}
          width={800}
          height={800}
          className="object-cover rounded-lg"
        />
        <p className="mt-5 text-lg text-center">{photo.description}</p>
      </div>
    </div>
  );
};

export default PhotoPage;