"use client";

import React, { useState } from "react";
import Image from "next/image";
import Pics1 from "@/public/pics/IMG_20220307_152910_643.jpg";
import Pics2 from "@/public/pics/wp7864479.png";
import Pics3 from "@/public/pics/wp7937871.jpg";
import Love from "@/public/svg/heart-svgrepo-com.png";
import Lovefilled from "@/public/svg/heart-filled-svgrepo-com.png";
import Share from "@/public/svg/share-svgrepo-com.png";
import Sharefilled from "@/public/svg/share-filled-svgrepo-com.png";
import Saved from "@/public/svg/saved-svgrepo-com.png";
import Savedfilled from "@/public/svg/saved-filled-svgrepo-com.png";

const Home = () => {
  const [lovedImages, setLovedImages] = useState([false, false, false]);
  const [sharedImages, setSharedImages] = useState([false, false, false]);
  const [savedImages, setSavedImages] = useState([false, false, false]);

  const handleLoveClick = (index: number) => {
    setLovedImages((prevState) => {
      const newLovedImages = [...prevState];
      newLovedImages[index] = !newLovedImages[index];
      return newLovedImages;
    });
  };

  const handleShareClick = (index: number) => {
    setSharedImages((prevState) => {
      const newSharedImages = [...prevState];
      newSharedImages[index] = !newSharedImages[index];
      return newSharedImages;
    });
  };

  const handleSavedClick = (index: number) => {
    setSavedImages((prevState) => {
      const newSavedImages = [...prevState];
      newSavedImages[index] = !newSavedImages[index];
      return newSavedImages;
    });
  };

  return (
    <div className="mb-40">
      <header className="p-3 flex items-center bg-slate-600 mb-20 ">
        <div>
          <h1 className="text-3xl p-2 font-extrabold">PicUp Website</h1>
        </div>

        <div className="text-xl space-x-10 p-3 ml-auto">
          <a href="/headers/your-photos" className="underline-animation hover:font-medium">Your Photos</a>
          <a href="/headers/new-ones" className="underline-animation hover:font-medium">New Ones</a>
          <a href="/headers/about" className="underline-animation hover:font-medium">About</a>
          <a href="/headers/saved" className="underline-animation hover:font-medium">Saved</a>
        </div>
      </header>

      <div className="flex justify-center items-start grid-cols-3 gap-8 max-w-[1400px] m-auto">

        <div className="bg-white p-2">
            <Image
              src={Pics1}
              alt="car pic"
            />
            <div className="relative pt-2">
              <div className="absolute right-1 bottom-1 flex gap-5">
                <Image
                  src={lovedImages[0] ? Lovefilled : Love}
                  alt="love"
                  className="w-7 h-7 hover:scale-110 transition-all duration-150"
                  onClick={() => handleLoveClick(0)}
                />
                <Image
                  src={sharedImages[0] ? Sharefilled : Share}
                  alt="share"
                  className="w-7 h-7 hover:scale-110 transition-all duration-150"
                  onClick={() => handleShareClick(0)}
                />
                <Image
                  src={savedImages[0] ? Savedfilled : Saved}
                  alt="saved"
                  className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                  onClick={() => handleSavedClick(0)}
                />
              </div>

              <div className="">
                <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                  Download
                </button>
              </div>
            </div>
        </div>

        <div className="bg-white p-2">
          <Image
              src={Pics2}
              alt="car pic"
            />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              <Image
                src={lovedImages[1] ? Lovefilled : Love}
                alt="love"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleLoveClick(1)}
              />
              <Image
                src={sharedImages[1] ? Sharefilled : Share}
                alt="share"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleShareClick(1)}
              />
              <Image
                src={savedImages[1] ? Savedfilled : Saved}
                alt="saved"
                className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                onClick={() => handleSavedClick(1)}
              />
            </div>

            <div className="">
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-2">
          <Image
              src={Pics3}
              alt="car pic"
            />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              <Image
                src={lovedImages[2] ? Lovefilled : Love}
                alt="love"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleLoveClick(2)}
              />
              <Image
                src={sharedImages[2] ? Sharefilled : Share}
                alt="share"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleShareClick(2)}
              />
              <Image
                src={savedImages[2] ? Savedfilled : Saved}
                alt="saved"
                className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                onClick={() => handleSavedClick(2)}
              />
            </div>

            <div className="">
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
