import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="p-3 flex items-center bg-slate-600">
        <div>
          <h1 className="text-3xl p-2 font-extrabold">PicUp Website</h1>
        </div>

        <div className="text-xl space-x-10 p-2 ml-auto">
          <span>Photos</span>
          <span>New Ones</span>
          <span>About</span>
          <span>Saved</span>
        </div>
      </header>
    </div>
  );
}
