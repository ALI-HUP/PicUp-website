"use client";

import React from "react";
import Header from "../components/Header";
import ImageGrid from "@/components/ImageGrid";
import Image from "next/image";
import profilePic from "@/public/profile/360_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg";

const Home = () => {
  return (
    <div className="mb-40">
      <Header />
      <ImageGrid images={[]} />

      <div className="flex justify-center items-center flex-col">
        <div className="bg-slate-700 p-10 w-[50%] m-5 flex gap-20">
          <div className="">
            <p>;ogjbn;kjn</p>
          </div>
          <div>
            <Image alt="profile pic" src={profilePic} className="w-40"/>
          </div>
          <div>
            <Image alt="profile pic" src={profilePic} className="w-40"/>
          </div>
        </div>

        <div className="bg-slate-700 p-10 w-[50%] m-5 flex gap-20">
          <div className="">
            <p>;ogjbn;kjn</p>
          </div>
          <div>
            <Image alt="profile pic" src={profilePic} className="w-40"/>
          </div>
          <div>
            <Image alt="profile pic" src={profilePic} className="w-40"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
