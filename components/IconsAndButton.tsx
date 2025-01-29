"use client";

import React, { useState } from "react";
import Image from "next/image";
import Love from "@/public/svg/heart-svgrepo-com.png";
import Lovefilled from "@/public/svg/heart-filled-svgrepo-com.png";
import Share from "@/public/svg/share-svgrepo-com.png";
import Sharefilled from "@/public/svg/share-filled-svgrepo-com.png";
import Saved from "@/public/svg/saved-svgrepo-com.png";
import Savedfilled from "@/public/svg/saved-filled-svgrepo-com.png";
import { Snackbar, Alert } from "@mui/material";

interface Props {
  downloadLink: string;
}

const IconsAndButton: React.FC<Props> = ({ downloadLink }) => {
  const [loveState, setLoveState] = useState(false);
  const [shareState, setShareState] = useState(false);
  const [savedState, setSavedState] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleLikeClick = () => {
    setLoveState(!loveState);
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(downloadLink).then(() => {
      setShareState(true);
      setSnackbarMessage("Link copied!");
      setOpenSnackbar(true);

      setTimeout(() => {
        setShareState(false);
      }, 3000);
    });
  };

  const handleSaveClick = () => {
    setSavedState(!savedState);
  };

  const handleDownloadClick = () => {
    console.log("Download clicked");
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="relative pt-2">
      <div className="absolute right-1 bottom-1 flex gap-5">
        <Image
          src={loveState ? Lovefilled : Love}
          alt="love"
          className="w-7 h-7 hover:scale-110 transition-all duration-150 cursor-pointer"
          onClick={handleLikeClick}
        />
        <Image
          src={shareState ? Sharefilled : Share}
          alt="share"
          className="w-7 h-7 hover:scale-110 transition-all duration-150 cursor-pointer"
          onClick={handleShareClick}
        />
        <Image
          src={savedState ? Savedfilled : Saved}
          alt="saved"
          className="w-[30px] h-[30px] hover:scale-110 transition-all duration-150 cursor-pointer"
          onClick={handleSaveClick}
        />
      </div>

      <div>
        <button
          className="bg-blue-600 py-2 px-5 hover:bg-blue-700 duration-100"
          onClick={handleDownloadClick}
        >
          Download
        </button>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default IconsAndButton;
