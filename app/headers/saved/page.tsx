"use client";

import React from "react";
import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";

const Saved = () => {
  const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");

  return (
    <div className="mb-40">
      <Header />
      {savedImages.length > 0 ? (
        <ImageGrid images={savedImages.map((src: string) => ({ id: src, src }))} />
      ) : (
        <p className="text-center text-black mt-10">No saved images yet.</p>
      )}
    </div>
  );
};

export default Saved;
