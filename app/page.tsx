"use client";

import React from "react";
import Header from "../components/Header";
import ImageGrid from "../components/ImageGrid";
import Pics1 from "@/public/pics/IMG_20220307_152910_643.jpg";
import Pics2 from "@/public/pics/wp7864479.png";
import Pics3 from "@/public/pics/wp7937871.jpg";

const Home = () => {
  const images = [Pics1, Pics2, Pics3, Pics1];

  return (
    <div className="mb-40">
      <Header />
      <ImageGrid images={images} downloadLinks={[]} />
    </div>
  );
};

export default Home;
