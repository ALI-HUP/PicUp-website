"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";

const Saved = () => {
  const [savedImages, setSavedImages] = useState<string[]>([]);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    setSavedImages(savedImages);
  }, []);

  return (
    <div className="mb-40">
      <Header />

      <div className="bg-slate-900 flex justify-center items-center text-2xl font-bold p-14 pt-16">
        <h1>Saved Photos: {savedImages.length}</h1>
      </div>

      <ImageGrid images={savedImages} downloadLinks={savedImages} />
    </div>
  );
};

export default Saved;
