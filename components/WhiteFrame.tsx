import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Love from "@/public/svg/heart-svgrepo-com.png";
import Share from "@/public/svg/share-svgrepo-com.png";
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
    setLoveState(!loveState);
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(typeof imageSrc === "string" ? imageSrc : imageSrc.src).then(() => {
      setShareState(true);
      console.log("Link copied!");
    });
  };

  const handleSaveClick = () => {
    setSavedState(!savedState);

    const savedImages = JSON.parse(localStorage.getItem("savedImages") || "[]");
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;

    if (!savedImages.includes(imageUrl)) {
      savedImages.push(imageUrl);
      localStorage.setItem("savedImages", JSON.stringify(savedImages));
      console.log("Image saved!");
    } else {
      console.log("Image already saved!");
    }
  };

  return (
    <div className="relative bg-white">
      <div className="absolute right-1 bottom-2 flex gap-5">
        <button onClick={handleLikeClick}>
          <Image
            src={Love}
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
            src={savedState ? Saved : Saved}
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