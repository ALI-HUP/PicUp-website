"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";
import { StaticImageData } from "next/image";
import Image from "next/image";
import pic1 from "@/public/pics/IMG_20220307_152910_643.jpg"

const Profile = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | StaticImageData)[]>([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }
  }, []);

  const downloadLinks = uploadedImages.map((_, index) => `https://your-website-link.com/${index + 1}`);

  return (
    <div className="mb-40">
      <Header />

      <div className="m-auto bg-slate-900">

        <div className="flex justify-center items-center py-20 space-x-20">
          <Image alt="profile pic " src={pic1} className="rounded-full w-44 h-44"/>

          <div>
            <h1 className="text-3xl font-black">User - Name</h1>
            <span className="text-lg">Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>

          <div>
            {/* button */}
          </div>
        </div>

        <div className="text-center space-y-3 pb-5 text-2xl font-bold">
          <p>Photos: {uploadedImages.length}</p>
        </div>
      </div>

      <ImageGrid images={uploadedImages as (string | StaticImageData)[]} downloadLinks={downloadLinks} />
    </div>
  );
};

export default Profile;
