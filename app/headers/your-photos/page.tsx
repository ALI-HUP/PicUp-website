import React from "react";
import Header from '@/components/Header';
import Image from "next/image";
import Pics1 from "@/public/pics/IMG_20220307_152910_643.jpg";


const NewOnes = () => {
  return (
    <div>

      <Header />

      <h2>Your photos</h2>
      <p>Here are Your photos...</p>
      
      <div className="bg-white p-2">
          <Image src={Pics1} alt="car pic" />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              {/* <Image
                src={loveState[0] ? Lovefilled : Love}
                alt="love"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => toggleLove(0)}
              />
              <Image
                src={shareState[0] ? Sharefilled : Share}
                alt="share"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleShareClick(0, "https://your-website-link.com/1")}
              />
              <Image
                src={savedState[0] ? Savedfilled : Saved}
                alt="saved"
                className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                onClick={() => toggleSaved(0)}
              /> */}
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default NewOnes;
