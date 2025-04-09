"use client";

import React from "react";
import ImageGrid from "@/components/ImageGrid";

const Saved = () => {
  const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");

  return (
    <div className="mb-40">

      <div className="bg-slate-900 flex justify-center items-center text-2xl font-extrabold p-14">
        <h1>Saved Photos: {savedImages.length}</h1>
      </div>
      {savedImages.length > 0 ? (
        <ImageGrid images={savedImages.map((src: string) => ({ id: src, src }))} />
      ) : (
        <p className="text-center text-black mt-10">No saved images yet...</p>
      )}
    </div>
  );
};

export default Saved;
