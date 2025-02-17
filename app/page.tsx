"use client";

import React from "react";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";

const hardcodedImages = [
  { id: 101, src: "/pics/IMG_20220307_152910_643.jpg" },
  { id: 102, src: "/pics/wp7864479.png" },
  { id: 103, src: "/pics/wp7937871.jpg" },
  { id: 104, src: "/pics/IMG_20220307_152910_643.jpg" },
];

const Home = () => {
  return (
    <div className="mb-40">
      <Header />
      <ImageGrid images={hardcodedImages} />
    </div>
  );
};

export default Home;
