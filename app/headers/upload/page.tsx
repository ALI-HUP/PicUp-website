"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Uploadpic from "@/public/svg/upload_7078851.png";
import Button from "@/components/Button";

const Upload = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | ArrayBuffer | null)[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validImages = files.filter((file) => (file as File).type.startsWith("image/"));

    if (validImages.length + imagePreviews.length <= 5) {
      const newPreviews: (string | ArrayBuffer | null)[] = [];
      validImages.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          if (newPreviews.length === validImages.length) {
            setImagePreviews((prev) => [...prev, ...newPreviews]);
            const storedImages = localStorage.getItem("uploadedImages");
            const allImages = storedImages ? [...JSON.parse(storedImages), ...newPreviews] : newPreviews;
            localStorage.setItem("uploadedImages", JSON.stringify(allImages));
          }
        };
        reader.readAsDataURL(file);
      });
    } else {
      alert("You can only upload up to 5 images at a time.");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-grow justify-center items-center p-5">
        <div className="bg-white bg-opacity-85 rounded-xl w-[50%] p-5">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-black font-extrabold m-5">Upload Your Photos</h2>
            <Image src={Uploadpic} alt="Upload pic" className="mb-5 w-14" />
          </div>

          <form className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center w-full gap-5">
              <Button
                styleType="white"
                label="Choose files"
                type="button"
                onClick={handleButtonClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
            </div>

            <div className="flex justify-center gap-5 w-full mt-4">
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
              <Button label="Upload" onClick={() => {}} type="submit" styleType="white" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
