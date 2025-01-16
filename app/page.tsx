import React from "react";

const Home = () => {
  return (
    <div>
      <header className="p-3 flex items-center bg-slate-600">
        <div>
          <h1 className="text-3xl p-2 font-extrabold">PicUp Website</h1>
        </div>

        <div className="text-xl space-x-10 p-3 ml-auto">
          <a href="/headers/photos">
            Photos
          </a>
          <a href="/headers/new-ones">
            New Ones
          </a>
          <a href="/headers/about">
            About
          </a>
          <a href="/headers/saved">
            Saved
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
