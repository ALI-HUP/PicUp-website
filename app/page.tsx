"use client";

import React from "react";
import Header from "../components/Header";
import ImageGrid from "@/components/ImageGrid";
import { useImageStore } from "@/store/imageStore";

const Home = () => {
  const images = useImageStore((state) => state.images);

  return (
    <div className="mb-40">
      <Header />
      <ImageGrid images={images.map(img => ({ id: String(img.id), src: img.src }))} />
    </div>
  );
};

export default Home;
