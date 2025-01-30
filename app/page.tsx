"use client";

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Pics1 from "@/public/pics/IMG_20220307_152910_643.jpg";
import Pics2 from "@/public/pics/wp7864479.png";
import Pics3 from "@/public/pics/wp7937871.jpg";
import IconsAndButton from "../components/IconsAndButton";

const Home = () => {
  return (
    <div className="mb-40">
      <Header />
      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <div className="sm:w-1/4">
          <div>
            <Image src={Pics1} alt="square pic" />
            <IconsAndButton downloadLink="https://your-website-link.com/1" />
          </div>
        </div>

        <div className="sm:w-1/4">
          <div>
            <Image src={Pics2} alt="horizontal pic" />
            <IconsAndButton downloadLink="https://your-website-link.com/2" />
          </div>
        </div>

        <div className="sm:w-1/4">
          <div>
            <Image src={Pics3} alt="vertical pic" />
            <IconsAndButton downloadLink="https://your-website-link.com/3" />
          </div>
        </div>

        <div className="sm:w-1/4">
          <div>
            <Image src={Pics2} alt="horizontal pic" />
            <IconsAndButton downloadLink="https://your-website-link.com/3" />
          </div>
        </div>

        <div className="sm:w-1/4">
          <div>
            <Image src={Pics1} alt="square pic" />
            <IconsAndButton downloadLink="https://your-website-link.com/3" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
