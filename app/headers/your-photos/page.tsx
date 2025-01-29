import React from "react";
import Header from '@/components/Header';
import Image from "next/image";
import Pics1 from "@/public/pics/IMG_20220307_152910_643.jpg";
import IconsAndButton from "@/components/IconsAndButton";


const Yourphotos = () => {
  return (
    <div className="mb-40">

      <Header />

      <h2>Your photos</h2>
      <p>Here are Your photos...</p>
      
      <div className="flex justify-center items-start grid-cols-3 gap-8 max-w-[1400px] m-auto mt-10">
        <div className="bg-white p-2">
          <Image src={Pics1} alt="car pic" />
          <IconsAndButton downloadLink="https://your-website-link.com/1" />
        </div>

        <div className="bg-white p-2">
          <Image src={Pics1} alt="car pic" />
          <IconsAndButton downloadLink="https://your-website-link.com/2" />
        </div>

        <div className="bg-white p-2">
          <Image src={Pics1} alt="car pic" />
          <IconsAndButton downloadLink="https://your-website-link.com/3" />
        </div>
      </div>

    </div>
  );
};

export default Yourphotos;
