"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import ImageGrid from "@/components/ImageGrid";
import Image from "next/image";
import profile from "@/public/profile/360_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg";
import Button from "@/components/Button";
import Camera from "@/public/svg/camera_2441817.png";
import { useImageStore } from "@/store/imageStore";
import NotificationSystem from "@/components/NotificationSystem";

const Profile = () => {
  const images = useImageStore((state) => state.images);
  const [likedImages, setLikedImages] = useState<string[]>([]);
  const [savedImages, setSavedImages] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("User Name");
  const [userBio, setUserBio] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
  const [activeTab, setActiveTab] = useState("photos");
  const [profilePic, setProfilePic] = useState<string | StaticImageData>(profile);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "info" | "success" } | null>(null);

  useEffect(() => {
    setLikedImages(JSON.parse(localStorage.getItem("likedImages") || "[]"));
    setSavedImages(JSON.parse(localStorage.getItem("savedImages") || "[]"));

    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }

    const storedUserName = localStorage.getItem("userName");
    const storedUserBio = localStorage.getItem("userBio");
    if (storedUserName) {
      setUserName(storedUserName);
    }
    if (storedUserBio) {
      setUserBio(storedUserBio);
    }
  }, []);

  const handleEditClick = () => {
    if (userName.length < 3) {
      setNotification({ message: "Username must be at least 3 characters long.", type: "error" });
      return;
    }

    if (userBio.length < 10) {
      setNotification({ message: "Bio must be at least 10 characters long.", type: "error" });
      return;
    }

    if (isEditing) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("userBio", userBio);
      setNotification({ message: "Profile updated successfully!", type: "success" });
    }

    setIsEditing(!isEditing);
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProfilePic = reader.result as string;
        setProfilePic(newProfilePic);
        localStorage.setItem("profilePic", newProfilePic);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-40">

      <div className="m-auto bg-slate-900">
        <div className="flex justify-center items-center py-10 space-x-20">
          <div className="relative">
            <Image
              alt="profile pic"
              src={profilePic}
              className="rounded-full w-44 h-44 object-cover"
              width={176}
              height={176}
            />
            {isEditing && (
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
                <label htmlFor="profile-pic-upload" className="cursor-pointer">
                  <input
                    id="profile-pic-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePicChange}
                  />
                  <Image alt="camera" src={Camera} className="w-9 h-9 p-1" />
                </label>
              </div>
            )}
          </div>

          <div className="flex flex-col w-[550px] text-white">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="p-2 text-3xl border-l-2 font-black bg-slate-700 mb-2"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your User name"
                  maxLength={30}
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
            <Link href="/header/upload" passHref>
              <Button 
                label="Upload" 
                type="button" 
                styleType="white" 
                className="w-full" 
                onClick={() => {}} 
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-64 text-2xl pb-5 font-bold">
          <button className={`p-2 ${activeTab === "photos" ? "text-white" : "text-gray-400"}`} onClick={() => setActiveTab("photos")}>
            Photos: {images.length}
          </button>
          <button className={`p-2 ${activeTab === "liked" ? "text-white" : "text-gray-400"}`} onClick={() => setActiveTab("liked")}>
            Liked: {likedImages.length}
          </button>
          <button className={`p-2 ${activeTab === "saved" ? "text-white" : "text-gray-400"}`} onClick={() => setActiveTab("saved")}>
            Saved: {savedImages.length}
          </button>
        </div>
      </div>

      <div className="mt-5">
        {activeTab === "photos" && <ImageGrid images={images.map(img => ({ id: String(img.id), src: img.src }))} />}
        {activeTab === "liked" && <ImageGrid images={likedImages.map((src) => ({ id: src, src }))} />}
        {activeTab === "saved" && <ImageGrid images={savedImages.map((src) => ({ id: src, src }))} />}
      </div>

      {notification && <NotificationSystem message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
    </div>
  );
};

export default Profile;
