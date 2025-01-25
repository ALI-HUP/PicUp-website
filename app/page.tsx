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
import { Snackbar, Alert } from "@mui/material";

const Home = () => {
  const [loveState, setLoveState] = useState([false, false, false]);
  const [shareState, setShareState] = useState([false, false, false]);
  const [savedState, setSavedState] = useState([false, false, false]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleShareClick = (index: number, link: string) => {
    navigator.clipboard.writeText(link).then(() => {
      const updatedShareState = [...shareState];
      updatedShareState[index] = true;
      setShareState(updatedShareState);

      setOpenSnackbar(true);
    });
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);

    setShareState([false, false, false]);
  };

  const toggleLove = (index: number) => {
    const updatedLoveState = [...loveState];
    updatedLoveState[index] = !updatedLoveState[index];
    setLoveState(updatedLoveState);
  };

  const toggleSaved = (index: number) => {
    const updatedSavedState = [...savedState];
    updatedSavedState[index] = !updatedSavedState[index];
    setSavedState(updatedSavedState);
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
          <Image src={Pics1} alt="car pic" />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              <Image
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
              />
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-2">
          <Image src={Pics2} alt="car pic" />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              <Image
                src={loveState[1] ? Lovefilled : Love}
                alt="love"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => toggleLove(1)}
              />
              <Image
                src={shareState[1] ? Sharefilled : Share}
                alt="share"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleShareClick(1, "https://your-website-link.com/2")}
              />
              <Image
                src={savedState[1] ? Savedfilled : Saved}
                alt="saved"
                className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                onClick={() => toggleSaved(1)}
              />
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-2">
          <Image src={Pics3} alt="car pic" />
          <div className="relative pt-2">
            <div className="absolute right-1 bottom-1 flex gap-5">
              <Image
                src={loveState[2] ? Lovefilled : Love}
                alt="love"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => toggleLove(2)}
              />
              <Image
                src={shareState[2] ? Sharefilled : Share}
                alt="share"
                className="w-7 h-7 hover:scale-110 transition-all duration-150"
                onClick={() => handleShareClick(2, "https://your-website-link.com/3")}
              />
              <Image
                src={savedState[2] ? Savedfilled : Saved}
                alt="saved"
                className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150"
                onClick={() => toggleSaved(2)}
              />
            </div>
            <div>
              <button className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
