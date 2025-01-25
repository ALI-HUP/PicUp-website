"use client";

import React, { useState } from "react";
import Image from "next/image";
import Upload from "@/public/svg/upload_7078851.png";

const YourPhotos = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | ArrayBuffer | null)[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validImages = files.filter((file) => (file as File).type.startsWith("image/"));

    if (validImages.length + imagePreviews.length <= 4) {
      const newPreviews: (string | ArrayBuffer | null)[] = [];
      validImages.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          if (newPreviews.length === validImages.length) {
            setImagePreviews((prev) => [...prev, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      alert("You can only upload up to 4 images.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white opacity-90 rounded-xl w-[55%] p-5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl text-black font-extrabold m-5">Upload Your Photos</h2>
          <Image src={Upload} alt="Upload file" className="mb-5 w-14" />
        </div>

        <form className="flex flex-col gap-5 items-center">
          <div className="flex justify-center items-center w-full gap-5">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-[50%] border p-3 pl-2 rounded-md"
              multiple
            />
          </div>

          <div className="flex justify-center gap-5 w-full">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="w-20 h-20">
                <img
                  src={preview as string}
                  alt={`Preview ${index}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-gray-200 text-black py-2 px-5 hover:bg-gray-300 rounded-xl border border-black">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default YourPhotos;
