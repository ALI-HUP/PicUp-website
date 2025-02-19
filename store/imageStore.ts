import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Image {
  id: number;
  src: string;
}

interface ImageStore {
  images: Image[];
  addImage: (newImage: string) => void;
}

export const useImageStore = create(
  persist<ImageStore>(
    (set, get) => ({
      images: [
        { id: 1, src: "/pics/IMG_20220307_152910_643.jpg" },
        { id: 2, src: "/pics/wp7864479.png" },
        { id: 3, src: "/pics/wp7937871.jpg" },
      ],
      addImage: (newImage) =>
        set((state) => ({
          images: [...state.images, { id: state.images.length + 1, src: newImage }],
        })),
    }),
    {
      name: "image-storage", // LocalStorage key
    }
  )
);
