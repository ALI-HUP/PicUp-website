import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Image {
  id: number;
  src: string;
}

interface ImageStore {
  images: Image[];
  selectedImage: string | null;
  addImage: (newImage: string) => void;
  setSelectedImage: (src: string | null) => void;
}

export const useImageStore = create(
  persist<ImageStore>(
    (set) => ({
      images: [],
      selectedImage: null,
      addImage: (newImage) =>
        set((state) => ({
          images: [...state.images, { id: Date.now(), src: newImage }],
        })),
      setSelectedImage: (src) => set({ selectedImage: src }),
    }),
    {
      name: "image-storage",
    }
  )
);
