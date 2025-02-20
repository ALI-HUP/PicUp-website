"use client";

import React from "react";
import Header from "../components/Header";
import ImageGrid from "@/components/ImageGrid";

const Home = () => {
  return (
    <div className="mb-40">
      <Header />
      <ImageGrid images={[]} />
    </div>
  );
};

export default Home;
