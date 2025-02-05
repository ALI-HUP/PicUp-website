import React from "react";
import Image from "next/image";
import Love from "@/public/svg/heart-svgrepo-com.png";
import Share from "@/public/svg/share-svgrepo-com.png";
import Saved from "@/public/svg/saved-svgrepo-com.png";
import Button from "@/components/Button";

const WhiteFrame: React.FC = () => {

  return (
    <div className="relative bg-white">
      <div className="absolute right-1 bottom-2 flex gap-5">
        <button>
          <Image
            src={Love}
            alt="love"
            className="w-7 h-7 hover:scale-110 transition-all duration-150"
          />
        </button>
        <button>
          <Image
            src={Share}
            alt="share"
            className="w-7 h-7 hover:scale-110 transition-all duration-150"
          />
        </button>
        <button onClick={() => {}} type="submit">
          <Image
            src={Saved}
            alt="saved"
            className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
          />
        </button>
      </div>

      <Button
        label="Download"
        onClick={() => console.log("Download clicked")}
        styleType="blue"
      />

    </div>
  );
};

export default WhiteFrame;
