"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Header from "@/components/Header";
import ImageGrid from "@/components/ImageGrid";
import Image from "next/image";
import pic1 from "@/public/pics/IMG_20220307_152910_643.jpg";
import Button from "@/components/Button";

const Profile = () => {
  const [uploadedImages, setUploadedImages] = useState<(string | StaticImageData)[]>([]);
  const [likedImages, setLikedImages] = useState<(string | StaticImageData)[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("User - Name");
  const [userBio, setUserBio] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit.");
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setUploadedImages(JSON.parse(storedImages));
    }

    const storedLikedImages = localStorage.getItem("likedImages");
    if (storedLikedImages) {
      setLikedImages(JSON.parse(storedLikedImages));
    }
  }, []);

  const downloadLinks = uploadedImages.map((_, index) => `https://your-website-link.com/${index + 1}`);

  const handleEditClick = () => {
    if (isEditing) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userBio", userBio);
    }
    setIsEditing(!isEditing);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mb-40">
      <Header />

      <div className="m-auto bg-slate-900">
        <div className="flex justify-center items-center py-10 space-x-20">
          <Image alt="profile pic" src={pic1} className="rounded-full w-44 h-44" />

          <div className="flex flex-col w-[550px]">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="p-2 text-3xl border-l-2 font-black bg-slate-700 mb-2"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your User name"
                />
                <input
                  className="p-2 text-lg border-l-2 bg-slate-700"
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                  placeholder="Write something about yourself in 65 words"
                  maxLength={65}
                />
              </>
            ) : (
              <>
                <h1 className="p-2 text-3xl font-black mb-2">{userName}</h1>
                <span className="p-2 text-lg">{userBio}</span>
              </>
            )}
          </div>

          <div className="flex flex-col space-y-5 mt-4 min-w-[150px]">
            <Button
              label={isEditing ? "Save Profile" : "Edit Profile"}
              type="button"
              styleType="white"
              onClick={handleEditClick}
              className="w-full"
            />
            <Link href="/headers/upload" passHref>
              <Button label="Upload" type="button" styleType="white" onClick={() => {}} className="w-full" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-40 text-2xl pb-5 font-bold">
          <button
            className={`p-2 ${activeTab === "photos" ? "font-bold text-white" : "text-gray-400"}`}
            onClick={() => handleTabClick("photos")}
          >
            Photos: {uploadedImages.length}
          </button>
          <button
            className={`p-2 ${activeTab === "liked" ? "font-bold text-white" : "text-gray-400"}`}
            onClick={() => handleTabClick("liked")}
          >
            Liked: {likedImages.length}
          </button>
        </div>
      </div>

      <div className="mt-5">
        {activeTab === "photos" && <ImageGrid images={uploadedImages as (string | StaticImageData)[]} downloadLinks={downloadLinks} />}
        {activeTab === "liked" && <ImageGrid images={likedImages as (string | StaticImageData)[]} downloadLinks={downloadLinks} />}
      </div>
    </div>
  );
};

export default Profile;
