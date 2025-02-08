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
    <div className="text-black">
      <Header />

      <h2>Saved</h2>
      <br />
      <p>In this page you can see the posts you saved</p>

      <ImageGrid images={savedImages} downloadLinks={savedImages} />
    </div>
  );
};

export default Saved;
