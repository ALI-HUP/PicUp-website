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
            <a>Photos</a>
          </a>
          <a href="/headers/new-ones">
            <a>New Ones</a>
          </a>
          <a href="/headers/about">
            <a>About</a>
          </a>
          <a href="/headers/saved">
            <a>Saved</a>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
