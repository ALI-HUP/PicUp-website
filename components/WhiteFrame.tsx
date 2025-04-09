"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Love from "@/public/svg/heart-svgrepo-com.png";
import Lovefilled from "@/public/svg/heart-filled-svgrepo-com.png";
import Share from "@/public/svg/share-svgrepo-com.png";
import Sharefilled from "@/public/svg/share-filled-svgrepo-com.png";
import Saved from "@/public/svg/saved-svgrepo-com.png";
import Savedfilled from "@/public/svg/saved-filled-svgrepo-com.png";
import Button from "@/components/Button";

interface Props {
  imageSrc: string | StaticImageData;
}

const WhiteFrame: React.FC<Props> = ({ imageSrc }) => {
  const [loveState, setLoveState] = useState(false);
  const [shareState, setShareState] = useState(false);
  const [savedState, setSavedState] = useState(false);

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    setSavedState(savedImages.includes(imageUrl));

    const likedImages = JSON.parse(localStorage.getItem("likedImages") || "[]");
    setLoveState(likedImages.includes(imageUrl));
  }, [imageSrc]);

  const getDownloadableUrl = (src: string | StaticImageData): string => {
    if (typeof src === "string") {
      return src;
    } else {
      return src.src;
    }
  };

  const handleDownload = () => {
    const url = getDownloadableUrl(imageSrc);
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloaded-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLikeClick = () => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages") || "[]");
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

    if (loveState) {
      const updatedLikedImages = likedImages.filter((url: string) => url !== imageUrl);
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
      setLoveState(false);
      console.log("Image removed from liked!");
    } else {
      likedImages.push(imageUrl);
      localStorage.setItem("likedImages", JSON.stringify(likedImages));
      setLoveState(true);
      console.log("Image liked!");
    }
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(typeof imageSrc === "string" ? imageSrc : imageSrc.src).then(() => {
      setShareState(true);
      console.log("Link copied!");
    });
  };

  const handleSaveClick = () => {
    const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

    if (savedState) {
      const updatedSavedImages = savedImages.filter((url: string) => url !== imageUrl);
      localStorage.setItem("savedImages", JSON.stringify(updatedSavedImages));
      setSavedState(false);
      console.log("Image removed from saved!");
    } else {
      savedImages.push(imageUrl);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      setSavedState(true);
      console.log("Image saved!");
    }
  };

  return (
    <div className="relative bg-white">
      <div className="absolute right-1 bottom-2 flex gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5">
        <button onClick={handleLikeClick}>
          <Image
            src={loveState ? Lovefilled : Love}
            alt="love"
            className="w-7 h-7 hover:scale-110 transition-all duration-150"
          />
        </button>
        <button onClick={handleShareClick}>
          <Image
            src={Share}
            alt="share"
            className="w-7 h-7 hover:scale-110 transition-all duration-150"
          />
        </button>
        <button onClick={handleSaveClick}>
          <Image
            src={savedState ? Savedfilled : Saved}
            alt="saved"
            className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
          />
        </button>
      </div>

      <Button
        label="Download"
        onClick={handleDownload}
        styleType="blue"
      />
    </div>
  );
};

export default WhiteFrame;
