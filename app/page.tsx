import React from "react";
import Image from "next/image";
import Pics from "@/public/pics/IMG_20220307_152910_643.jpg";

const Home = () => {
  return (
    <div className="mb-52">
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

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-10 w-full max-w-[1200px]">
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>

          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>

          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
          <div className="w-[335px] h-[390px] bg-white flex justify-center">
            <Image src={Pics} alt="car pic" className="w-80 h-80 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
