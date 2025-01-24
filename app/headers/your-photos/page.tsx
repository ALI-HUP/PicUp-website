"use client";

import React, { useState } from "react";

const YourPhotos = () => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (e: { target: { files: Iterable<unknown> | ArrayLike<unknown>; }; }) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter((file) => file.type.startsWith("image/"));

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
      <div className="bg-white opacity-85 rounded-xl w-[55%] p-6">
        <h2 className="text-center text-xl text-black font-extrabold m-5">
          Upload Your Photos
        </h2>

        <div className="flex flex-col gap-5 items-center">

          <div className="flex justify-center items-center p-5">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className=""
              multiple
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center w-[45%]">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="w-20 h-20">
                  <img
                    src={preview}
                    alt={`Preview ${index}`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white py-2 px-5 hover:bg-blue-700 rounded-xl border border-black duration-100">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourPhotos;
